export const APP_CONSTANTS = {
  API_TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  CACHE_DURATION: 5 * 60 * 1000,
  DEBOUNCE_DELAY: 300,
  THROTTLE_LIMIT: 1000,
} as const;

export const STORAGE_KEYS = {
  USER_TOKEN: '@user_token',
  USER_PREFERENCES: '@user_preferences',
  THEME_MODE: '@theme_mode',
  LANGUAGE: '@language',
  ONBOARDING_COMPLETED: '@onboarding_completed',
} as const;

export const SCREEN_NAMES = {
  SPLASH: 'Splash',
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'ForgotPassword',
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const VALIDATION_RULES = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MAX_NAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 254,
} as const;
