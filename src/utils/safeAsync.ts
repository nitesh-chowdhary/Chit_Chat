export async function safeAsync<T>(
  promise: Promise<T>,
): Promise<[T | null, Error | null]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    console.log('🚀 ~ safeAsync ~ err:', err);
    return [null, err as Error];
  }
}
