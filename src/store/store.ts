import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import token from './reducers/tokenSlice';
import users from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    token,
    users,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
