import { Platform, StyleSheet, ViewStyle } from 'react-native';

type ShadowVariant = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'heavy';

const ios = (style: ViewStyle) => Platform.select({ ios: style, default: {} });
const android = (elevation: number, shadowColor?: string) =>
  Platform.select({
    android: { elevation, ...(shadowColor ? { shadowColor } : {}) },
    default: {},
  });

/**
 * Predefined cross-platform shadow styles.
 * Usage: style={[styles.card, SHADOWS.md]}
 */
const sh: Record<Exclude<ShadowVariant, 'none'>, ViewStyle> = {
  xs: {
    ...ios({
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 2,
    }),
    ...android(1),
  },
  sm: {
    ...ios({
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    }),
    ...android(2),
  },
  md: {
    ...ios({
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
    }),
    ...android(4),
  },
  lg: {
    ...ios({
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
    }),
    ...android(8),
  },
  xl: {
    ...ios({
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.14,
      shadowRadius: 18,
    }),
    ...android(12),
  },
  heavy: {
    ...ios({
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.2,
      shadowRadius: 30,
    }),
    ...android(16),
  },
};

/**
 * Helper to get a shadow with custom color
 * Example: getShadow('md', '#1f6fff')
 */
export const getShadow = (
  variant: Exclude<ShadowVariant, 'none'>,
  color = '#000',
): ViewStyle => {
  const base = sh[variant];
  return {
    ...base,
    ...(Platform.OS === 'ios' ? { shadowColor: color } : {}),
    ...(Platform.OS === 'android' ? { shadowColor: color } : {}),
  };
};

export const shadow = StyleSheet.create({
  ...sh,
});
