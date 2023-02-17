import React from 'react';
import styles from './mainlistpage.module.css';
import { EmployeeCard } from './EmployeeCard';
import { useAppSelector } from '../../../store/hooks';



export function MainListPage() {
  const users = useAppSelector(state => state.users.users)

  return (
    <div className={styles.container}>

      {users.map(user => (
        <EmployeeCard
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          lastName={user.last_name}
          firstName={user.first_name}
        />
      ))}

    </div>
  );
}
