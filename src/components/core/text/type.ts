import { TextProps as RNTextProps, TextStyle } from 'react-native';

export type Variant = 'body' | 'caption';

export interface TextProps extends RNTextProps {
  variant?: Variant;
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  children: React.ReactNode;
}
