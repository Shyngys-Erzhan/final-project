// // login.jsx
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { authenticateUser } from '../../../api/api';


// const Login = () => {
//   const handleLogin = async (values, { setSubmitting }) => {
//     try {
//       const response = await authenticateUser(values);
//       console.log('Authentication successful!', response);
//     } catch (error) {
//       console.error('Authentication failed:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ username: '', password: '' }}
//       validationSchema={Yup.object({
//         username: Yup.string().required('Required'),
//         password: Yup.string().required('Required'),
//       })}
//       onSubmit={handleLogin}
//     >
//       <Form>
//         <label htmlFor="username">Username</label>
//         <Field type="text" name="username" />
//         <ErrorMessage name="username" />

//         <label htmlFor="password">Password</label>
//         <Field type="password" name="password" />
//         <ErrorMessage name="password" />

//         <button type="submit">Login</button>
//       </Form>
//     </Formik>
//   );
// };

// export default Login;
