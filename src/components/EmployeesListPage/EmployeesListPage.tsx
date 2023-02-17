import React, { useEffect } from 'react';
import styles from './employeeslistpage.module.css';
import { HeaderListPage } from './HeaderListPage';
import { MainListPage } from './MainListPage';
import { ReactComponent as VektorSVG } from '../../assets/img/buttonVektor.svg'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUsersThunk } from '../../store/reducers/usersSlice';
import { useHistory } from 'react-router-dom';

export function EmployeesListPage() {
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.token.token)
  const { currentPage, totalPages } = useAppSelector(state => state.users)

  const history = useHistory()

  useEffect(() => {
    if (token && token !== '') {
      dispatch(getUsersThunk(token))
    } else history.push('/login')
  }, [token, dispatch, history])


  const handleClick = () => {
    if (currentPage !== totalPages) {
      dispatch(getUsersThunk(token, currentPage + 1))
    }
  }

  return (
    <div className={styles.container}>
      <HeaderListPage />
      <MainListPage />
      {currentPage !== totalPages &&
        <button className={styles.btn} onClick={handleClick}>
          Показать еще
          <VektorSVG />
        </button>
      }
    </div>
  );
}
