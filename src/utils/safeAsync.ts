export async function safeAsync<T>(
  promise: Promise<T>,
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (err) {
    console.log('🚀 ~ safeAsync ~ err:', err);
    return { data: null, error: err as Error };
  }
}
