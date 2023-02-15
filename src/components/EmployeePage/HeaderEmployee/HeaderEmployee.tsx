import React from 'react';
import styles from './headeremployee.module.css';

type HeaderEmployeeType = {
  avatar: string
  firstName: string
  lastName: string
}

export function HeaderEmployee({ avatar, firstName, lastName }: HeaderEmployeeType) {
  // console.log(avatar);
  
  return (
    <div className={styles.header}>
        <div className={styles.top}>
            <button className={styles.btn}>Выход</button>
            <button className={styles.btn}>Назад</button>
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
