import React from 'react';
import styles from '../styles/components/LoginForm.module.css';
import { ImGoogle, ImFacebook, ImTwitter } from 'react-icons/im';

const LoginForm = () => {
  return (
    <div className={styles.loginFormDiv}>
      <p className={styles.loginFormHeader}>You must be logged in to vote</p>
      <div className={styles.loginFormBtnContainer}>
        <a href="https://makai-test.herokuapp.com/api/users/auth/google">
          {/* <a href="http://localhost:3001/api/users/auth/google"> */}
          <div className={styles.loginFormNeoButton}>
            <ImGoogle size={24} />
            &nbsp;&nbsp; Sign-in with Google
          </div>
        </a>

        <a href="https://makai-test.herokuapp.com/api/users/auth/twitter">
          {/* <a href="http://localhost:3001/api/users/auth/twitter"> */}
          <div className={styles.loginFormNeoButton}>
            <ImTwitter size={24} />
            &nbsp;&nbsp;Sign-in with Twitter
          </div>
        </a>

        <a href="https://makai-test.herokuapp.com/api/users/auth/facebook">
          {/* <a href="http://localhost:3001/api/users/auth/facebook"> */}
          <div className={styles.loginFormNeoButton}>
            <ImFacebook size={24} />
            &nbsp;&nbsp; Sign-in with Facebook
          </div>
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
