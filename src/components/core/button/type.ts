import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';
import { styles, variantStyles } from './styles';

export type Variant = keyof typeof variantStyles;
export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}
