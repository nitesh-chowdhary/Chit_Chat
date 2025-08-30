import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import { ReactNode } from 'react';

export interface ScrollViewProps extends RNScrollViewProps {
  isLoading?: boolean;
  loader?: ReactNode;
}
