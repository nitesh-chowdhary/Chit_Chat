// namespace
import { Device } from './device';
import { Helper } from './helper';
import { Scale } from './scale';
import { Regex } from './regex';
import { Timer } from './timers';
import { logger } from './logger';
import { safeAsync } from './safeAsync';
import { storage } from './storage';
import { performanceMonitor, withPerformance } from './performance';

export * from './constants';

export {
  // namespace
  Device,
  Helper,
  Regex,
  Scale,
  Timer,

  // ES6
  logger,
  storage,
  performanceMonitor,

  // function
  safeAsync,
  withPerformance,
};
