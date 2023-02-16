import React from 'react';
import styles from './headeremployee.module.css';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { deleteTokenThunk } from '../../../store/reducers/tokenSlice';
import { ReactComponent as ExitSVG } from '../../../assets/img/exit.svg';
import { ReactComponent as BackSVG } from '../../../assets/img/back.svg';

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
    dispatch(deleteTokenThunk())
  }

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <button className={styles.btn} onClick={handleClickBack}>
          Назад
          <BackSVG />
        </button>
        <button className={styles.btn} onClick={handleClickExit}>
          Выход
          <ExitSVG />
        </button>
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
