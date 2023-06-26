import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isAuth: boolean;
  userId: string;
}

const initialState: AuthState = {
  isAuth: false,
  userId: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.userId = action.payload;
    },
    logout: state => {
      state.isAuth = false;
      state.userId = '';
    },
  },
});

export const {login} = authSlice.actions;
export const {logout} = authSlice.actions;

export default authSlice.reducer;
