import React from 'react';
import styles from './employeecard.module.css';
import { ReactComponent as NoLikeSVG } from '../../../../assets/img/noLike.svg';
import { ReactComponent as LikeSVG } from '../../../../assets/img/like.svg';

export function EmployeeCard() {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img className={styles.img} src="" alt="Аватар" />
        <h3 className={styles.title}>
          artur
        </h3>
        <NoLikeSVG />
      </div>
    </div>
  );
}
