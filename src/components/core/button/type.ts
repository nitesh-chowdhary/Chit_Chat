import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
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
