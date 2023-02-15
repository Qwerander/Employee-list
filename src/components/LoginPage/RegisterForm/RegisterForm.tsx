import React from 'react';
import styles from './registerform.module.css';
import { Field, Form, Formik, FormikHelpers } from 'formik';

interface Values {
  name: string;
  email: string;
  password: string;
  passwordConfirum: string;
}

export function RegisterForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirum: '',
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
        <label className={styles.label} htmlFor="name">Имя</label>
        <Field
          id="name"
          name="name"
          placeholder="Введите имя"
        />
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
        <label className={styles.label} htmlFor="passwordConfirum">Подтвердите пароль</label>
        <Field
          id="passwordConfirum"
          name="passwordConfirum"
          placeholder="Повторите пароль"
          type="password"
        />

        <button className={styles.btn} type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
}
