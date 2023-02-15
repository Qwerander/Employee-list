import React from 'react';
import styles from './loginform.module.css';
import { Field, Form, Formik, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
}

export function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',    
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className={styles.form}>

        <label className={styles.label} htmlFor="email">Электронная почта</label>
        <Field
          id="email"
          name="email"
          placeholder="Электронная почта"
          type="email"
        />
        <label className={styles.label} htmlFor="password">Пароль</label>
        <Field
          id="password"
          name="password"
          placeholder="Введите пароль"
          type="password"
        />
        <button className={styles.btn} type="submit">Войти</button>
      </Form>
    </Formik>
  );
}
