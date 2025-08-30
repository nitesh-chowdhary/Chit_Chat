import React, { FC } from 'react';
import { ScrollViewProps } from './type';

const ScrollView: FC<ScrollViewProps> = props => {
  const { children, ...rest } = props;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {props?.isLoading ? props?.loader : children}
    </ScrollView>
  );
};

export default ScrollView;
