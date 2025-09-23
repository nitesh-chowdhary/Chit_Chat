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
    borderWidth: 0,
  },
  secondary: {
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
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 0,
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
