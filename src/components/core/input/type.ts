import { type TextInputProps as RNTextInputProps, StyleProp, ViewStyle } from 'react-native';

export type InputVariant =
  | 'default'
  | 'outlined'
  | 'filled'
  | 'underlined';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends RNTextInputProps {
  /** Input variant style */
  variant?: InputVariant;

  /** Input size */
  size?: InputSize;

  /** Label text displayed above the input */
  label?: string;

  /** Error message to display */
  error?: string;

  /** Helper text displayed below the input */
  helperText?: string;

  /** Whether the input is disabled */
  disabled?: boolean;

  /** Whether to show character count */
  showCharacterCount?: boolean;

  /** Icon to display on the left side */
  leftIcon?: React.ReactNode;

  /** Icon to display on the right side */
  rightIcon?: React.ReactNode;

  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;

  /** Input container style */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /** Label style */
  labelStyle?: StyleProp<ViewStyle>;

  /** Error text style */
  errorStyle?: StyleProp<ViewStyle>;

  /** Helper text style */
  helperTextStyle?: StyleProp<ViewStyle>;
}