import React, { useEffect, useState } from 'react';
import styles from './loginpage.module.css';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';
import { useAppSelector } from '../../store/hooks';
import { useHistory } from 'react-router-dom';

export function LoginPage() {
  const [loginRegister, toggleLoginRegister] = useState(false)
  const history = useHistory()

	const token = useAppSelector(state => state.token.token)
	
	useEffect(() => {
		if (token) {
			history.push('/list')
		} 
	}, [history, token])

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
