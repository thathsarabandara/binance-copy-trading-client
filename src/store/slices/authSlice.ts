import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'trader' | 'follower' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  otpSent: boolean;
  otpEmail: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  otpSent: false,
  otpEmail: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state: AuthState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    clearAuth: (state: AuthState) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.otpSent = false;
      state.otpEmail = null;
    },
    setOtpSent: (state: AuthState, action: PayloadAction<{ sent: boolean; email: string }>) => {
      state.otpSent = action.payload.sent;
      state.otpEmail = action.payload.email;
    },
    clearOtp: (state: AuthState) => {
      state.otpSent = false;
      state.otpEmail = null;
    },
  },
});

export const { setLoading, setError, setUser, clearAuth, setOtpSent, clearOtp } = authSlice.actions;
export default authSlice.reducer;
