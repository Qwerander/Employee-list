import React from 'react';
import styles from './headerlistpage.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { deleteTokenThunk } from '../../../store/reducers/tokenSlice';
import { ReactComponent as ExitSVG } from '../../../assets/img/exit.svg';
import { deleteUsers } from '../../../store/reducers/usersSlice';

export function HeaderListPage() {
  const dispatch = useAppDispatch()
  
  const handleClickExit = () => {
    dispatch(deleteTokenThunk())  
    dispatch(deleteUsers())  
    
  }

  return (
    <div className={styles.header}>
      <button className={styles.btn} onClick={handleClickExit}>
        Выход
        <ExitSVG />
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
