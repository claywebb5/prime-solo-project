import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <div>
        {/* <h1>Login info:</h1>
        <li>Username: clay</li>
        <li>Password: 1234</li> */}
      </div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
