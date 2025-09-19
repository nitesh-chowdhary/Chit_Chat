import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { logger } from '../utils';
import { layout, space } from '../styles';
import { Button, Text } from './core';

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    logger.error('ErrorBoundary caught:', error, info);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={[layout.flex1, layout.center, space.p4]}>
          <Text variant="title">Something went wrong</Text>
          <Text variant="message">{this.state.error?.message}</Text>
          <Button onPress={this.resetError}>Try Again</Button>
        </View>
      );
    }
    return this.props.children;
  }
}
