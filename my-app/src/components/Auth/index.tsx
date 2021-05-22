import React from 'react';
import './style.css';

const Auth = () => {
  return (
    <div className='auth'>
      <form>
        <h3>Login Form</h3>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
        </div>
      </form>
    </div>
  );
};

export default Auth;
