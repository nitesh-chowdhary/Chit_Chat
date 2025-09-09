import { StyleSheet } from 'react-native';

const radius = StyleSheet.create({
  none: { borderRadius: 0 },
  xs: { borderRadius: 2 },
  sm: { borderRadius: 4 },
  rg: { borderRadius: 8 },
  md: { borderRadius: 12 },
  lg: { borderRadius: 16 },
  xl: { borderRadius: 24 },
  '2xl': { borderRadius: 32 },
  full: { borderRadius: 9999 },
});

export default radius;
