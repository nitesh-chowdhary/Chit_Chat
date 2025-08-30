import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
  disabled: {
    backgroundColor: '#ccc',
    borderColor: '#ccc',
  },
  textDisabled: {
    color: '#666',
  },
});

// 🔹 Variant Styles
export const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#EEE',
    borderColor: '#EEE',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#007AFF',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});

// 🔹 Button Sizes
export const sizeStyles = StyleSheet.create({
  sm: { paddingVertical: 6, paddingHorizontal: 12 },
  md: { paddingVertical: 10, paddingHorizontal: 16 },
  lg: { paddingVertical: 14, paddingHorizontal: 20 },
});

// 🔹 Text Styles
export const textStyles = StyleSheet.create({
  base: {
    textAlign: 'center',
    fontWeight: '500',
  },
});

export const textSizeStyles = StyleSheet.create({
  sm: { fontSize: 12 },
  md: { fontSize: 16 },
  lg: { fontSize: 20 },
});

export const textVariantStyles = StyleSheet.create({
  primary: { color: '#FFF' },
  secondary: { color: '#111' },
  outline: { color: '#007AFF' },
  ghost: { color: '#111' },
});
