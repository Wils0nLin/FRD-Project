import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isAuth: boolean;
  username: string;
}

const initialState: AuthState = {
  isAuth: AsyncStorage.getItem('token') !== null,
  username: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.username = action.payload;
    },
    logout: state => {
      state.isAuth = false;
      state.username = '';
      AsyncStorage.removeItem('token');
    },
  },
});

export const {login} = authSlice.actions;

export default authSlice.reducer;
