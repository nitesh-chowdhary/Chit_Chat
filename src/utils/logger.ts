type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDev = __DEV__;

function log(level: LogLevel, ...args: any[]) {
  if (!isDev && level === 'debug') return;

  const prefix = `[${level.toUpperCase()}]`;
  switch (level) {
    case 'debug':
      console.log(prefix, ...args);
      break;
    case 'info':
      console.info(prefix, ...args);
      break;
    case 'warn':
      console.warn(prefix, ...args);
      break;
    case 'error':
      console.error(prefix, ...args);
      break;
    default:
      console.info(prefix, ...args);
  }
}

export const logger = {
  debug: (...args: any[]) => log('debug', ...args),
  info: (...args: any[]) => log('info', ...args),
  warn: (...args: any[]) => log('warn', ...args),
  error: (...args: any[]) => log('error', ...args),
};
