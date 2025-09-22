import { useColorScheme } from 'react-native';
import { colorPalette } from '../styles';

export function useTheme() {
  const scheme = useColorScheme();

  const themeColors =
    scheme === 'dark' ? colorPalette.dark : colorPalette.light;

  return themeColors;
}
