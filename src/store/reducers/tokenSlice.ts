import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { api } from '../../components/api/api';


export type TokenStateType = {
  token: string
  error: string
}

const initialState: TokenStateType = {
  token: '',
  error: '',
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    deleteToken: (state) => {
      state.token = ''
    },
  }
});

export const { setToken, deleteToken } = tokenSlice.actions;

export const deleteTokenThunk = (): AppThunk =>
  (dispatch) => {
    dispatch(deleteToken())
  }

export const getTokenRegister =
  (email: string, password: string): AppThunk =>
    (dispatch) => {

      api.register(email, password)
        .then(res => {
          dispatch(setToken({ token: res.token }))
        })

    };

export const getTokenLogin =
  (email: string, password: string): AppThunk =>
    (dispatch) => {

      api.login(email, password)
        .then(res => {
          dispatch(setToken({ token: res.token }))
        })

    };

export default tokenSlice.reducer;
