import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import type { TextProps } from './type';

const Text: React.FC<TextProps> = ({
  variant = 'body',
  size,
  color,
  weight,
  style,
  children,
  ...rest
}) => {
  return (
    <RNText
      style={[
        styles[variant],
        { fontSize: size },
        { fontWeight: weight },
        { color },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
    color: '#666',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  message: { color: 'red', marginBottom: 16, textAlign: 'center' },
  errorText: {
    fontSize: 12,
    color: '#ff0000',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default Text;
