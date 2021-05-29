import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';
import bg from 'components/../images/login_bg.png';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
const Auth = () => {
  return (
    <div className='auth'>
      <div className='login-form'>
        <form>
          <h2>BLOG</h2>
          <h3>
            Hello, <br />
            <span>Welcome!</span>
          </h3>
          <TextField id='email' label='email' />
          <TextField id='password' label='password' type='password' />

          <Button variant='contained' color='secondary'>
            LOG IN
          </Button>
          <Button variant='contained' color='primary'>
            Sign Up
          </Button>
          <div className='social-login'>
            <span>social login</span>
            <FcGoogle size='2rem' />
            <AiFillFacebook size='2rem' color='#3b5998 ' />
          </div>
        </form>
        <img src={bg} />
      </div>
    </div>
  );
};

export default Auth;
