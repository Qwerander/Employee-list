import React from 'react';
import styles from './employeeslistpage.module.css';
import { HeaderListPage } from './HeaderListPage';
import { MainListPage } from './MainListPage';
import {ReactComponent as VektorSVG} from '../../assets/img/buttonVektor.svg'

export function EmployeesListPage() {
  return (
    <div className={styles.container}>
      <HeaderListPage />
      <MainListPage />
      <button className={styles.btn}>
        Показать еще
        <VektorSVG />
      </button>
    </div>
  );
}
