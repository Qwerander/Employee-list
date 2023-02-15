import React, { useState } from 'react';
import styles from './loginpage.module.css';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  const [loginRegister, toggleLoginRegister] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>
          {loginRegister ? 'Регистрация' : 'Вход'}
        </h2>
        <button
          className={styles.switcher}
          onClick={() => toggleLoginRegister(loginRegister ? false : true)}
        >
          {loginRegister ? 'Вход' : 'Регистрация'}
        </button>
      </div>
      {loginRegister ? <RegisterForm /> : <LoginForm />}

    </div>
  );
}
