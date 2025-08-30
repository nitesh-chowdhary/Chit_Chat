import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
