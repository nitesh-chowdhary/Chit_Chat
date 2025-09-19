import { StyleSheet } from 'react-native';

const radius = StyleSheet.create({
  // All sides
  none: { borderRadius: 0 },
  xs: { borderRadius: 2 },
  sm: { borderRadius: 4 },
  rg: { borderRadius: 8 },
  md: { borderRadius: 12 },
  lg: { borderRadius: 16 },
  xl: { borderRadius: 24 },
  full: { borderRadius: 9999 },

  // Top corners
  topLeftXs: { borderTopLeftRadius: 2 },
  topLeftSm: { borderTopLeftRadius: 4 },
  topLeftRg: { borderTopLeftRadius: 8 },
  topLeftMd: { borderTopLeftRadius: 12 },
  topLeftLg: { borderTopLeftRadius: 16 },
  topLeftXl: { borderTopLeftRadius: 24 },
  topLeftFull: { borderTopLeftRadius: 9999 },

  topRightXs: { borderTopRightRadius: 2 },
  topRightSm: { borderTopRightRadius: 4 },
  topRightRg: { borderTopRightRadius: 8 },
  topRightMd: { borderTopRightRadius: 12 },
  topRightLg: { borderTopRightRadius: 16 },
  topRightXl: { borderTopRightRadius: 24 },
  topRightFull: { borderTopRightRadius: 9999 },

  // Bottom corners
  bottomLeftXs: { borderBottomLeftRadius: 2 },
  bottomLeftSm: { borderBottomLeftRadius: 4 },
  bottomLeftRg: { borderBottomLeftRadius: 8 },
  bottomLeftMd: { borderBottomLeftRadius: 12 },
  bottomLeftLg: { borderBottomLeftRadius: 16 },
  bottomLeftXl: { borderBottomLeftRadius: 24 },
  bottomLeftFull: { borderBottomLeftRadius: 9999 },

  bottomRightXs: { borderBottomRightRadius: 2 },
  bottomRightSm: { borderBottomRightRadius: 4 },
  bottomRightRg: { borderBottomRightRadius: 8 },
  bottomRightMd: { borderBottomRightRadius: 12 },
  bottomRightLg: { borderBottomRightRadius: 16 },
  bottomRightXl: { borderBottomRightRadius: 24 },
  bottomRightFull: { borderBottomRightRadius: 9999 },

  // Top (both top corners)
  topXs: { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  topSm: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  topRg: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  topMd: { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  topLg: { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  topXl: { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  topFull: { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },

  // Bottom (both bottom corners)
  bottomXs: { borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
  bottomSm: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  bottomRg: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  bottomMd: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  bottomLg: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  bottomXl: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  bottomFull: { borderBottomLeftRadius: 9999, borderBottomRightRadius: 9999 },

  // Left (both left corners)
  leftXs: { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
  leftSm: { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  leftRg: { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  leftMd: { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  leftLg: { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  leftXl: { borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },
  leftFull: { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },

  // Right (both right corners)
  rightXs: { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  rightSm: { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  rightRg: { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  rightMd: { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
  rightLg: { borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  rightXl: { borderTopRightRadius: 24, borderBottomRightRadius: 24 },
  rightFull: { borderTopRightRadius: 9999, borderBottomRightRadius: 9999 },
});

export default radius;
