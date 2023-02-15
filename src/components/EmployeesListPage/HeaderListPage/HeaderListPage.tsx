import React from 'react';
import styles from './headerlistpage.module.css';

export function HeaderListPage() {
  return (
    <div className={styles.header}>
      <button className={styles.btn}>
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
