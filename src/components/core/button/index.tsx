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
import { ButtonProps } from './type';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  onPress,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisabled}
      style={[
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
