import React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef: any = React.createRef();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}

export function popToTop() {
  if (navigationRef.current && navigationRef.current.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
}
