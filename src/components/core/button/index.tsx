import React from 'react';
import { TouchableOpacity, View, ActivityIndicator, Text } from 'react-native';
import {
  sizeStyles,
  styles,
  textSizeStyles,
  textStyles,
  textVariantStyles,
  variantStyles,
} from './styles';
import type { ButtonProps } from './type';
import { useTheme } from '@/hooks';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  onPress,
}) => {
  const theme = useTheme();
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabled}
      style={[
        { backgroundColor: theme.primary },
        styles.base,
        sizeStyles[size],
        variantStyles[variant],
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'secondary' || variant === 'outline' ? '#111' : '#FFF'
          }
        />
      ) : (
        <View style={styles.row}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Text
            style={[
              textStyles.base,
              textSizeStyles[size],
              textVariantStyles[variant],
              isDisabled && styles.textDisabled,
            ]}
          >
            {children}
          </Text>
          {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
