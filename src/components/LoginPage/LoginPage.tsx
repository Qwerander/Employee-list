import React from 'react';
import styles from './loginpage.module.css';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Регистрация
      </h2>
      <LoginForm />
    </div>
  );
}
