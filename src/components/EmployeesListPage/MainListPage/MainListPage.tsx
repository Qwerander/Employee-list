import React from 'react';
import styles from './mainlistpage.module.css';
import { EmployeeCard } from './EmployeeCard';


export function MainListPage() {
  return (
    <div className={styles.container}>
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
}
