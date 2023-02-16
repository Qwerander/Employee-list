import React from 'react';
import styles from './headerlistpage.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { deleteToken } from '../../../store/reducers/tokenSlice';

export function HeaderListPage() {
  const dispatch = useAppDispatch()
  
  const handleClickExit = () => {
    dispatch(deleteToken())  
  }
  
  return (
    <div className={styles.header}>
      <button className={styles.btn} onClick={handleClickExit}>
        Выход
      </button>

      <h1 className={styles.title}>
        Наша команда
      </h1>
      <p className={styles.text}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
      </p>
    </div>
  );
}
