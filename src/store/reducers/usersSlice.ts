import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { api, UserType } from '../../components/api/api';


export type UsersStateType = {
  users: Array<UserType>
  currentPage: number
  totalPages: number
  totalUsers: number
}

const initialState: UsersStateType = {
  users: [],
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0

}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (
      state,
      action: PayloadAction<{
        users: Array<UserType>,
        currentPage: number,
        totalPages: number,
        totalUsers: number
      }>
    ) => {

      state.users = action.payload.users
      state.currentPage = action.payload.currentPage
      state.totalPages = action.payload.totalPages
      state.totalUsers = action.payload.totalUsers
    },
    setMoreUsers: (state, action: PayloadAction<{ users: Array<UserType>, currentPage: number }>) => {
      state.users.push(...action.payload.users)
      state.currentPage = action.payload.currentPage
    },

    setUser: (state, action: PayloadAction<{ user: UserType }>) => {
      state.users.push(action.payload.user);
    },
    deleteUsers: (state) => {
      state.users = []
      state.currentPage = 0
      state.totalPages = 0
      state.totalUsers = 0
    }
  }
});

export const { setUsers, setUser, setMoreUsers, deleteUsers } = usersSlice.actions;

export const getUsersThunk =
  (token: string, page = 1): AppThunk =>
    (dispatch) => {
      api.getUsers(token, page)
        .then(res => {
          if (page === 1) {
            dispatch(setUsers({
              users: res.data,
              currentPage: res.page,
              totalPages: res.total_pages,
              totalUsers: res.total
            }))
          } else {
            dispatch(setMoreUsers({
              users: res.data,
              currentPage: page
            }))
          }
        }
        )

    };

export const getUserThunk =
  (token: string, id: number): AppThunk =>
    (dispatch) => {
      api.getUser(token, id)
        .then(res =>
          dispatch(setUser({ user: res.data }))
        )

    };

export default usersSlice.reducer;
