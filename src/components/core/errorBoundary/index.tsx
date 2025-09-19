import React from 'react';
import { View } from 'react-native';
import { logger } from '../../../utils/logger';
import Button from '../button';
import Text from '../text';
import { layout, space } from '../../../styles';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logger.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return (
        <View style={[layout.flex1, layout.center, space.p4]}>
          <Text variant="title">Oops! Something went wrong</Text>
          <Text variant="message">
            An unexpected error occurred. Please try again.
          </Text>
          {__DEV__ && this.state.error && (
            <Text variant="errorText">{this.state.error.toString()}</Text>
          )}
          <Button onPress={this.resetError}>Try Again</Button>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
