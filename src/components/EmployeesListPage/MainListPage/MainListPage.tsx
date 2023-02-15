import React, { useEffect } from 'react';
import styles from './mainlistpage.module.css';
import { EmployeeCard } from './EmployeeCard';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getUsersThunk } from '../../../store/reducers/usersSlice';
import { useHistory } from 'react-router-dom';


export function MainListPage() {
  // const history = useHistory()
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.users)
  const token = useAppSelector(state => state.token.token)
  const history = useHistory()

  useEffect(() => {
    if (token) {
      dispatch(getUsersThunk(token))
    } else history.push('/login')
  }, [token, dispatch, history])


  return (
    <div className={styles.container}>

      {users.map(user => (
        <EmployeeCard
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          lastName={user.last_name}
          firstName={user.first_name}
        />
      ))}


    </div>
  );
}
