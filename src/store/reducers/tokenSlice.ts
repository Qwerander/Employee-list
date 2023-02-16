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
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     // const response = await fetchCount(amount);
//     // // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setToken: (state, action: PayloadAction<{token: string}>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = action.payload.token;
    },
    deleteToken: (state) => {
      state.token = '';
    },
  }
});

export const { setToken, deleteToken } = tokenSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectToken = (state: RootState) => state.token;

export const deleteTokenThunk = (): AppThunk  => 
  (dispatch) => {
    localStorage.removeItem('token')
    dispatch(deleteToken())
  }

export const getTokenRegister =
  (email: string, password: string): AppThunk =>
    (dispatch) => {
      
      api.register(email, password)
        .then(res => {
        localStorage.setItem('token', JSON.stringify(res.token))
        dispatch(setToken({token: res.token}))
        })
      
    };

export default tokenSlice.reducer;