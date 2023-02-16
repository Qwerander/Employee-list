import React from 'react';
import styles from './loginform.module.css';
import { Field, Form, Formik } from 'formik';
import { useAppDispatch } from '../../../store/hooks';
import { getTokenRegister } from '../../../store/reducers/tokenSlice';
import { ReactComponent as CrossEyeSVG } from '../../../assets/img/crossEye.svg'
// import { ReactComponent as EyeSVG } from '../../../assets/img/eye.svg'
import * as yup from 'yup';

interface Values {
  email: string;
  password: string;
}

export function LoginForm() {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Введите корректный email').required('Обязательно введите email'),
    password: yup.string().required('Обязательно введите пароль')
  })

  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(
        values: Values
      ) => {
        dispatch(getTokenRegister(values.email, values.password))
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
        <Form className={styles.form}>

          <label className={styles.label} htmlFor="email">Электронная почта</label>
          <div className={styles.wrapper}>
            <Field
              id="email"
              name="email"
              placeholder="Электронная почта"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <label className={styles.label} htmlFor="password">Пароль</label>
          <div className={styles.wrapper}>
            <Field
              id="password"
              name="password"
              placeholder="Введите пароль"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
               <CrossEyeSVG />
            {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <button
            className={styles.btn}
            type="submit"
            disabled={isValid && !dirty}
          >
            Войти
          </button>
        </Form>
      )}
    </Formik>
  );
}
