import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { ErrorBoundary } from '@/components/core';
import StackNavigator from '@/navigation/StackNavigator';
import { store } from '@/store';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ErrorBoundary>
        <Provider store={store}>
          <SafeAreaProvider>
            <StackNavigator />
          </SafeAreaProvider>
        </Provider>
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default App;
