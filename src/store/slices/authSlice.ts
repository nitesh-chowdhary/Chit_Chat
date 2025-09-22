import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthTypes, UserTypes } from '../../types';
import { navigate, navigationRef } from '@/navigation/navigationService';

const initialState: AuthTypes.AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state, _action: PayloadAction<AuthTypes.Login>) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<UserTypes.User>) {
      state.user = action.payload;
      state.loading = false;
      navigate('Home');
    },
    loginFailure(state, action: PayloadAction<Error>) {
      state.error = action.payload.message;
      state.loading = false;
    },

    logoutRequest(state) {
      state.loading = true;
    },
    logoutSuccess(state) {
      state.user = null;
      state.loading = false;
    },
    logoutFailure(state, action: PayloadAction<Error>) {
      state.error = action.payload.message;
      state.loading = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;
