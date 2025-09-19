import { logger } from './logger';

interface PerformanceMetrics {
  duration: number;
  timestamp: number;
  name: string;
}

class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();

  startTimer(name: string): void {
    this.metrics.set(name, Date.now());
  }

  endTimer(name: string): PerformanceMetrics | null {
    const startTime = this.metrics.get(name);
    if (!startTime) {
      logger.warn(`Performance timer "${name}" was not started`);
      return null;
    }

    const endTime = Date.now();
    const duration = endTime - startTime;
    const metric: PerformanceMetrics = {
      name,
      duration,
      timestamp: endTime,
    };

    this.metrics.delete(name);

    if (__DEV__) {
      logger.debug(`Performance: ${name} took ${duration}ms`);
    }

    return metric;
  }

  measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.startTimer(name);
    return fn().finally(() => {
      this.endTimer(name);
    });
  }

  measure<T>(name: string, fn: () => T): T {
    this.startTimer(name);
    try {
      return fn();
    } finally {
      this.endTimer(name);
    }
  }
}

export const performanceMonitor = new PerformanceMonitor();

export const withPerformance = <T extends (...args: any[]) => any>(
  fn: T,
  name?: string,
): T => {
  return ((...args: Parameters<T>) => {
    const timerName = name || fn.name || 'anonymous';
    return performanceMonitor.measure(timerName, () => fn(...args));
  }) as T;
};