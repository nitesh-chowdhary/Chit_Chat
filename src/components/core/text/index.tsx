import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { TextProps } from './type';

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
});

export default Text;
