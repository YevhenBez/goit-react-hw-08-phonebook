import MaterialUI from '../../components/MaterialUI';
import css from '../../pages/login/css/login.module.css';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
    };
    
    // console.log(`login: ${email}; password: ${password} `)

  return (
    <div>
      <h1>Login form</h1>

      <form className={css.form}>
        <label className={css.label}>
          <MaterialUI.TextField
            label="Email"
            helperText="Please enter your email"
            focused
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <MaterialUI.TextField
            label="Password"
            focused
            helperText="Please enter your password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <MaterialUI.Button variant="contained" type="submit" color="success">
          LogIn
        </MaterialUI.Button>
      </form>
    </div>
  );
};

export default Login;
