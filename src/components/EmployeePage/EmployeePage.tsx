import React from 'react';
import styles from './employeepage.module.css';
import { HeaderEmployee } from './HeaderEmployee';
import { MainEmployee } from './MainEmployee';

export function EmployeePage() {
  return (
    <div className={styles.container}>
      <HeaderEmployee />
      <MainEmployee />
    </div>
  );
}
