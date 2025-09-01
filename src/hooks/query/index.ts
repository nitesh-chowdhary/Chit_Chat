import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { QueryProps, QueryResponse, QueryState, RequestConfig } from './type';
import { URL } from '../../config/api';
import { logger, storage } from '../../utils';

const axiosInstance = axios.create({
  baseURL: URL.baseURL,
});

const initialState: QueryState = {
  loading: false,
  data: null,
  error: null,
};

const useQuery = (config: QueryProps): QueryResponse => {
  const {
    method = 'GET',
    endpoint,
    key = `${method}_${endpoint}`,
    dependencies = [],
    enabled = true,
    ...rest
  } = config;

  const [queryState, setQueryState] = useState<QueryState>(initialState);

  const abortControllerRef = useRef<AbortController | null>(null);
  const refetchRef = useRef<RequestConfig | null>(null);

  const fetch = async (overRideConfig?: RequestConfig) => {
    const finalConfig = {
      method,
      endpoint,
      key,
      ...rest,
      ...overRideConfig,
    };

    refetchRef.current = finalConfig;

    if (!finalConfig?.endpoint) {
      logger.error('Error: Missing Endpoint');
      return;
    }

    setQueryState({
      loading: true,
      data: null,
      error: null,
    });

    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    if (finalConfig?.method === 'GET') {
      const cacheData = storage.get(finalConfig?.key);
      setQueryState(prev => ({
        ...prev,
        loading: false,
        data: cacheData,
      }));
    }

    try {
      const response = await axiosInstance({
        url: `${finalConfig?.endpoint}`,
        ...finalConfig,
        timeout: 10000,
        signal: controller.signal,
      });

      if (finalConfig?.method === 'GET') {
        storage.set(finalConfig?.key, response?.data);
      }

      setQueryState(prev => ({
        ...prev,
        data: response?.data,
      }));
    } catch (error: any) {
      if (axios.isCancel(error)) {
        logger.warn('Request Cancelled');
      } else if (error?.code === 'ECONNABORTED') {
        logger.error('Request timed out');
        setQueryState(prev => ({
          ...prev,
          error: 'Request timed out. Please try again.',
        }));
      } else {
        logger.error('Request Failed', error);
        setQueryState(prev => ({
          ...prev,
          error:
            error?.response?.data?.message || error?.message || 'Unknown Error',
        }));
      }
    } finally {
      setQueryState(prev => ({
        ...prev,
        loading: false,
      }));
    }
  };

  const refetch = () => {
    if (enabled && refetchRef?.current) fetch(refetchRef?.current);
  };

  const reset = () => setQueryState(initialState);

  useEffect(() => {
    if (enabled) {
      fetch();
    }
    return () => {
      abortControllerRef.current?.abort();
    };
  }, dependencies);

  return {
    ...queryState,
    refetch,
    reset,
  };
};

export default useQuery;
