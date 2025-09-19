import type { AuthTypes } from '../types';
import { safeAsync } from '../utils';
import { apiClient } from './api';

export namespace auth {
  export async function loginApi(payload: AuthTypes.Login) {
    const res = await safeAsync(apiClient.post('/login', payload));
    return res.data;
  }

  export async function logoutApi() {
    const res = await safeAsync(apiClient.post('/logout'));
    return res.data;
  }
}
