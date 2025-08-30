import { ListRenderItem, FlatListProps as RNFlatListProps } from 'react-native';

export interface FlatListProps<T> extends RNFlatListProps<T> {
  loading?: boolean;
  loadingData?: T[];
  renderLoadingItem?: ListRenderItem<T> | null | undefined;
}
