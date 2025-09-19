interface EnvConfig {
  API_BASE_URL: string;
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_MESSAGING_SENDER_ID: string;
  FIREBASE_APP_ID: string;
  FIREBASE_MEASUREMENT_ID?: string;
  LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
}

const devConfig: EnvConfig = {
  API_BASE_URL: 'https://api-dev.yourapp.com',
  FIREBASE_API_KEY: 'your-dev-firebase-api-key',
  FIREBASE_AUTH_DOMAIN: 'your-dev-project.firebaseapp.com',
  FIREBASE_PROJECT_ID: 'your-dev-project',
  FIREBASE_STORAGE_BUCKET: 'your-dev-project.appspot.com',
  FIREBASE_MESSAGING_SENDER_ID: '123456789',
  FIREBASE_APP_ID: '1:123456789:web:abcdef123456',
  LOG_LEVEL: 'debug',
};

const prodConfig: EnvConfig = {
  API_BASE_URL: 'https://api.yourapp.com',
  FIREBASE_API_KEY: 'your-prod-firebase-api-key',
  FIREBASE_AUTH_DOMAIN: 'your-prod-project.firebaseapp.com',
  FIREBASE_PROJECT_ID: 'your-prod-project',
  FIREBASE_STORAGE_BUCKET: 'your-prod-project.appspot.com',
  FIREBASE_MESSAGING_SENDER_ID: '987654321',
  FIREBASE_APP_ID: '1:987654321:web:fedcba654321',
  LOG_LEVEL: 'error',
};

export const env: EnvConfig = __DEV__ ? devConfig : prodConfig;

export default env;