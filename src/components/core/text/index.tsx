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
}) => (
  <RNText
    style={[
      { fontSize: size },
      { fontWeight: weight },
      { color: color },
      styles[variant],
      style,
    ]}
    {...rest}
  >
    {children}
  </RNText>
);

export const styles = StyleSheet.create({
  appName: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },

  body: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },

  caption: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },

  message: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    lineHeight: 22,
  },

  timestamp: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
    color: '#999',
  },

  errorText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#EF4444',
    textAlign: 'center',
  },

  placeholder: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
  },

  sentMessage: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },

  receivedMessage: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#111827',
  },

  system: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },

  highlight: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#25D366',
  },

  bold: {
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },

  italic: {
    fontStyle: 'italic',
    fontFamily: 'Poppins-Italic',
  },

  heading: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Text;
