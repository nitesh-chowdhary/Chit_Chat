import { type TextProps as RNTextProps, TextStyle } from 'react-native';
import { styles } from './index';

export type Variant = keyof typeof styles;

export interface TextProps extends RNTextProps {
  variant?: Variant;
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  children: React.ReactNode;
}
