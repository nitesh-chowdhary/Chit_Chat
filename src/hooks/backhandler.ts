import { useEffect } from 'react';
import { BackHandler } from 'react-native';

/**
 * Hook to handle Android hardware back button
 * @param handler function that returns true (prevent default) or false (exit/propagate)
 */
export function useBackHandler(handler: () => boolean) {
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );

    return () => {
      subscription.remove();
    };
  }, [handler]);
}
