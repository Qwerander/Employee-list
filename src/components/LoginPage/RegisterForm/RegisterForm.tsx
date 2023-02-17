import React, { useState } from 'react';
import styles from './registerform.module.css';
import { Field, Form, Formik } from 'formik';
import { ReactComponent as CrossEyeSVG } from '../../../assets/img/crossEye.svg'
import { ReactComponent as EyeSVG } from '../../../assets/img/eye.svg'
import { getTokenRegister } from '../../../store/reducers/tokenSlice';
import { useAppDispatch } from '../../../store/hooks';
import * as yup from 'yup';

interface Values {
  name: string;
  email: string;
  password: string;
  passwordConfirum: string;
}

export function RegisterForm() {
  const [hidePass, toggleHidePass] = useState(true)
  const [hidePassConfirum, toggleHidePassConfirum] = useState(true)

  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательно введите имя'),
    email: yup.string().email('Введите корректный email').required('Обязательно введите email'),
    password: yup.string().required('Обязательно введите пароль'),
    passwordConfirum: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно подтвердите пароль')
  })

  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{
        name: '',
        email: 'eve.holt@reqres.in',
        password: '',
        passwordConfirum: '',
      }}
      validateOnBlur
      onSubmit={(
        values: Values
      ) => {
        dispatch(getTokenRegister(values.email, values.password))
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="name">Имя</label>
          <div className={styles.wrapper}>
            <Field
              id="name"
              name="name"
              placeholder="Введите имя"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
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
              type={hidePass ? 'password' : 'text'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <span onClick={() => toggleHidePass(hidePass ? false : true)}>
              {hidePass
                ? <CrossEyeSVG />
                : <EyeSVG />
              }
            </span>
            {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>

          <label className={styles.label} htmlFor="passwordConfirum">Подтвердите пароль</label>
          <div className={styles.wrapper}>
            <Field
              id="passwordConfirum"
              name="passwordConfirum"
              placeholder="Повторите пароль"
              type={hidePassConfirum ? 'password' : 'text'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirum}
            />
            <span onClick={() => toggleHidePassConfirum(hidePassConfirum ? false : true)}>
              {hidePassConfirum
                ? <CrossEyeSVG />
                : <EyeSVG />
              }
            </span>
            {touched.passwordConfirum && errors.passwordConfirum && <p className={styles.error}>{errors.passwordConfirum}</p>}
          </div>

          <button
            className={styles.btn}
            type="submit"
            disabled={isValid && !dirty}
          >
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
}
