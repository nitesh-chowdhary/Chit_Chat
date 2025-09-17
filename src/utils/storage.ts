import { MMKV } from 'react-native-mmkv';

export const mmkv = new MMKV();

export const storage = {
  get: (key: string) => {
    const value = mmkv.getString(key);
    return value ? JSON.parse(value) : null;
  },
  set: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    mmkv.delete(key);
  },
};
