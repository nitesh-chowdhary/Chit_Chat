import UserTypes from './user';

namespace AuthTypes {
  export interface AuthState {
    user: UserTypes.User | null;
    loading: boolean;
    error: Error | null;
  }
  export interface Login {
    email: string;
    password: string;
  }
}

export default AuthTypes;
