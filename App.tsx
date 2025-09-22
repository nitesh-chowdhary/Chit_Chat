import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from './src/components/core';
import { store } from './src/store';
import StackNavigator from './src/navigation/StackNavigator';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      {/* <Provider store={store}> */}
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
      {/* </Provider> */}
    </ErrorBoundary>
  );
};

export default App;
