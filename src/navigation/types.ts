export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
