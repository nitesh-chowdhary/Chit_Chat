import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { env } from '../config/env';
import { logger } from '../utils/logger';
import { storage } from '../utils';
import { APP_CONSTANTS, HTTP_STATUS } from '../utils/constants';

interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  statusCode: number;
}

interface ApiError {
  message: string;
  statusCode: number;
  details?: any;
}

const getToken = () => storage.get('auth_token');

const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: APP_CONSTANTS.API_TIMEOUT,
});

namespace API {
  export const baseURL = env.API_BASE_URL;
  export const endpoint = {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      otp: '/auth/verify-otp',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
    },
    user: {
      profile: '/user/profile',
      updateProfile: '/user/profile',
    },
  };

  export const cacheKey = {
    user: 'user',
    token: 'auth_token',
  };
}

// ✅ Request interceptor
apiClient.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // ✅ Automatically detect JSON vs FormData
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    logger.info(
      `➡️ ${config.method?.toUpperCase()} ${config.url}`,
      config.data,
    );
    return config;
  },
  error => {
    logger.error('Request error', error);
    return Promise.reject(error);
  },
);

// ✅ Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    logger.debug('API Response:', {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  error => {
    const apiError: ApiError = {
      message: error.response?.data?.message || error.message || 'An error occurred',
      statusCode: error.response?.status || HTTP_STATUS.INTERNAL_SERVER_ERROR,
      details: error.response?.data,
    };

    logger.error('API Response Error:', apiError);

    if (apiError.statusCode === HTTP_STATUS.UNAUTHORIZED) {
      logger.warn('Unauthorized access, redirecting to login');
      // Handle logout logic here
    }

    return Promise.reject(apiError);
  },
);

export { apiClient, API };
