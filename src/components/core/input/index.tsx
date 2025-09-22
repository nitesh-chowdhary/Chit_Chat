import React, { useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import Text from '../text';
import { useTheme } from '../../../hooks';
import type { InputProps } from './type';

const TextInput: React.FC<InputProps> = ({
  variant = 'default',
  size = 'medium',
  label,
  error,
  helperText,
  disabled = false,
  showCharacterCount = false,
  leftIcon,
  rightIcon,
  containerStyle,
  inputContainerStyle,
  labelStyle,
  errorStyle,
  helperTextStyle,
  style,
  maxLength,
  value,
  ...rest
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const characterCount = value?.length || 0;
  const isError = !!error;

  const getInputContainerStyle = () => {
    let dynamicStyle: any = {
      backgroundColor: theme.card,
    };

    if (isFocused) {
      dynamicStyle.borderColor = theme.primary;
      if (variant === 'outlined' || variant === 'default') {
        dynamicStyle.borderWidth = 2;
      } else if (variant === 'underlined') {
        dynamicStyle.borderBottomWidth = 2;
      }
    }

    if (isError) {
      dynamicStyle.borderColor = theme.danger;
      if (variant === 'outlined' || variant === 'default') {
        dynamicStyle.borderWidth = 2;
      } else if (variant === 'underlined') {
        dynamicStyle.borderBottomWidth = 2;
      }
    }

    if (disabled) {
      dynamicStyle.opacity = 0.6;
      dynamicStyle.backgroundColor = theme.gray100;
    }

    return [styles.inputContainer, styles[`${variant}Container`], dynamicStyle];
  };

  const getInputStyle = () => {
    const baseStyle = [
      styles.input,
      styles[`${size}Input`],
      {
        color: disabled ? theme.gray400 : theme.text,
        fontFamily: 'Poppins-Regular',
      },
    ];

    return baseStyle;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          variant="body"
          style={[
            styles.label,
            { color: theme.text },
            isError && { color: theme.danger },
            labelStyle,
          ]}
        >
          {label}
        </Text>
      )}

      <View style={[getInputContainerStyle(), inputContainerStyle]}>
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}

        <RNTextInput
          style={[getInputStyle(), style]}
          placeholderTextColor={theme.gray400}
          editable={!disabled}
          value={value}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerLeft}>
          {error && (
            <Text
              variant="errorText"
              style={[styles.errorText, { color: theme.danger }, errorStyle]}
            >
              {error}
            </Text>
          )}

          {!error && helperText && (
            <Text
              variant="caption"
              style={[
                styles.helperText,
                { color: theme.gray500 },
                helperTextStyle,
              ]}
            >
              {helperText}
            </Text>
          )}
        </View>

        {showCharacterCount && maxLength && (
          <Text
            variant="caption"
            style={[
              styles.characterCount,
              { color: theme.gray500 },
              characterCount > maxLength && { color: theme.danger },
            ]}
          >
            {characterCount}/{maxLength}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  defaultContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  outlinedContainer: {
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },

  filledContainer: {
    borderWidth: 0,
    backgroundColor: '#F5F5F5',
  },

  underlinedContainer: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderBottomColor: '#E0E0E0',
    paddingHorizontal: 0,
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    ...Platform.select({
      ios: {
        paddingVertical: 12,
      },
      android: {
        paddingVertical: 8,
      },
    }),
  },

  smallInput: {
    fontSize: 14,
    ...Platform.select({
      ios: {
        paddingVertical: 8,
      },
      android: {
        paddingVertical: 6,
      },
    }),
  },

  mediumInput: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        paddingVertical: 12,
      },
      android: {
        paddingVertical: 8,
      },
    }),
  },

  largeInput: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        paddingVertical: 16,
      },
      android: {
        paddingVertical: 12,
      },
    }),
  },

  iconContainer: {
    marginHorizontal: 8,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 4,
    minHeight: 16,
  },

  footerLeft: {
    flex: 1,
  },

  errorText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  helperText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  characterCount: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginLeft: 8,
  },
});

export default TextInput;
