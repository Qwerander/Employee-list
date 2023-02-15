import React from 'react';
import styles from './registerform.module.css';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { ReactComponent as CrossEyeSVG } from '../../../assets/img/crossEye.svg'
import { ReactComponent as EyeSVG } from '../../../assets/img/eye.svg'

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
        console.log(values);
        
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
        <div className={styles.wrapper}>

          <Field
            id="password"
            name="password"
            placeholder="Введите пароль"
            type="password"
          />
          <CrossEyeSVG />
        </div>
        <label className={styles.label} htmlFor="passwordConfirum">Подтвердите пароль</label>
        <div className={styles.wrapper}>
          <Field
            id="passwordConfirum"
            name="passwordConfirum"
            placeholder="Повторите пароль"
            type="password"
          />
          <CrossEyeSVG />
        </div>
        <button className={styles.btn} type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
}
