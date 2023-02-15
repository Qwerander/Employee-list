import React from 'react';
import styles from './headeremployee.module.css';

export function HeaderEmployee() {
  return (
    <div className={styles.header}>
        <div className={styles.top}>
            <button className={styles.btn}>Выход</button>
            <button className={styles.btn}>Назад</button>
        </div>
        <div className={styles.bottom}>
          <img className={styles.img} src="" alt="Аватар" />
          <div className={styles.wrapper}>
            <h1 className={styles.name}>
              Arurtur
            </h1>
            <span className={styles.whois}>
              Партнер
            </span>
          </div>
        </div>
    </div>
  );
}
