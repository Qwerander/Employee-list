import React from 'react';
import styles from './headeremployee.module.css';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { deleteToken } from '../../../store/reducers/tokenSlice';

type HeaderEmployeeType = {
  avatar: string
  firstName: string
  lastName: string
}

export function HeaderEmployee({ avatar, firstName, lastName }: HeaderEmployeeType) {
  const history = useHistory()
  const dispatch = useAppDispatch()

  const handleClickBack = () => {
    history.push('/list')
  }

  const handleClickExit = () => {
    dispatch(deleteToken())  
  }
  
  return (
    <div className={styles.header}>
        <div className={styles.top}>
            <button className={styles.btn} onClick={handleClickBack}>Назад</button>
            <button className={styles.btn} onClick={handleClickExit}>Выход</button>
        </div>
        <div className={styles.bottom}>
          <img className={styles.img} src={avatar} alt="Аватар" />
          <div className={styles.wrapper}>
            <h1 className={styles.name}>
              {firstName + ' ' + lastName}
            </h1>
            <span className={styles.whois}>
              Партнер
            </span>
          </div>
        </div>
    </div>
  );
}
