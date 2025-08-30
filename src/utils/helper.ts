export const sleep = <T>(ms: number, value?: T) =>
  new Promise<T | void>(resolve => setTimeout(() => resolve(value), ms));

export const uniqueBy = <T>(arr: T[], key: keyof T) =>
  Array.from(new Map(arr.map(item => [item[key], item])).values());
