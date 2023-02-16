import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { api, UserType } from '../../components/api/api';


export type TokenStateType = {
  users: Array<UserType>

}

const initialState: TokenStateType = {
  users: [],

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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUsers: (state, action: PayloadAction<{users: Array<UserType>}>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.users = action.payload.users;
    },

    setUser: (state, action: PayloadAction<{user: UserType}>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.users.push(action.payload.user);
    },
  }
});

export const { setUsers, setUser } = usersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectToken = (state: RootState) => state.token;

export const getUsersThunk =
  (token: string): AppThunk =>
    (dispatch) => {
      
      api.getUsers( token )
        .then(res => 
        dispatch(setUsers({users: res.data}))
        )
      
    };

export const getUserThunk =
  (token: string, id: number): AppThunk =>
    (dispatch) => {
      
      api.getUser( token, id )
        .then(res => 
        dispatch(setUser({ user: res}))
        )
      
    };

export default usersSlice.reducer;
