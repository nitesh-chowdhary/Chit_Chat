import axios from 'axios';
import { API } from '../config/api';
import { logger, storage } from '../utils';

const getToken = () => storage.get('auth_token');

const apiClient = axios.create({
  baseURL: API.baseURL,
  timeout: 10000,
});

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
  response => {
    logger.info(`✅ Response from ${response.config.url}`, response.data);
    return response;
  },
  error => {
    if (error.response?.status === 401) {
      logger.warn('Unauthorized - maybe logout user or refresh token');
    }
    logger.error('Response error', error);
    return Promise.reject(error);
  },
);

export default apiClient;
