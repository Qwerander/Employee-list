import React, { useEffect } from 'react';
import styles from './employeepage.module.css';
import { HeaderEmployee } from './HeaderEmployee';
import { MainEmployee } from './MainEmployee';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserThunk } from '../../store/reducers/usersSlice';

export function EmployeePage() {
  const params: any = useParams()
  const history = useHistory()

  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.users)
  const token = useAppSelector(state => state.token.token)

  const user = users.find(user => user.id === Number(params.id))!

  useEffect(() => {
    if (!user && token) {
      dispatch(getUserThunk(token, Number(params.id)))
    }
  }, [user, dispatch, params.id, token])


  useEffect(() => {
    if (!token || token === '') {
      history.push('/login')
    } 
  }, [token, history])

  
  return (
    <div className={styles.container}>
      <HeaderEmployee 
        avatar={user.avatar}
        firstName={user.first_name}
        lastName={user.last_name}
        />
      <MainEmployee 
        email={user.email}
      />
    </div>
  );
}
