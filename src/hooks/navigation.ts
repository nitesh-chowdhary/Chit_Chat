import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  return useNavigation<NavigationProp>();
};
