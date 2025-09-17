import React from 'react';
import { FlatList as RNFlatList, ListRenderItem } from 'react-native';

import type { FlatListProps } from './type';

const Flatlist = <T,>({
  loading = false,
  loadingData,
  renderItem,
  renderLoadingItem,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  data,
  ...rest
}: FlatListProps<T>) => {
  const finalData = loading ? loadingData ?? [] : data;

  const finalRenderItem: ListRenderItem<T> | null = loading
    ? renderLoadingItem ?? null
    : renderItem ?? null;

  return (
    <RNFlatList
      {...rest}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      data={finalData}
      renderItem={finalRenderItem}
    />
  );
};

export default Flatlist;
