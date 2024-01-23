// sign.jsx
import { useState } from 'react';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authenticateUser, registerUser } from '../../api/api';

const Sign = () => {
  const [registrationError, setRegistrationError] = useState(null);

  const handleRegistration = async (values, { setSubmitting }) => {
    try {
      // Логика регистрации
      const registrationResponse = await registerUser(values);

      // Если регистрация успешна, попытка входа
      const loginResponse = await authenticateUser(values);
      console.log('Аутентификация успешна!', loginResponse);
    } catch (error) {
      console.error('Ошибка регистрации или аутентификации:', error);
      setRegistrationError('Ошибка при регистрации или входе');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Обязательное поле'),
          password: Yup.string().required('Обязательное поле'),
        })}
        onSubmit={handleRegistration}
      >
        <Form>
          <label htmlFor="username">Имя пользователя</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" />

          <label htmlFor="password">Пароль</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />

          <button type="submit">Зарегистрироваться</button>
        </Form>
      </Formik>
      {registrationError && <div>{registrationError}</div>}
      <Footer />
    </>
  );
};

export default Sign;

