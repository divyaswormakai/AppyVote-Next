import React, { useEffect, useState } from 'react';

import LoginForm from '../components/LoginForm';
import VoteForm from '../components/VoteForm';
import ProfileCompleteForm from '../components/ProfileComplete';
import LogOutForm from '../components/Logout';
import userService from '../utils/userService';

import styles from './../styles/pages/vote.module.css';
import mainStyle from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';

const Vote = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCompleteForm, setShowCompleteForm] = useState(false);
  const [showVoteForm, setShowVoteForm] = useState(false);
  const [showLogoutForm, setShowLogoutForm] = useState(false);

  useEffect(() => {
    formSelection();
  }, []);

  const formSelection = () => {
    // If user is not logged in show login form

    let params = new URL(document.location).searchParams;
    let queryID = params.get('id');
    console.log(queryID);
    if (queryID) {
      console.log('Why am I here');
      let id = queryID;
      let token = params.get('token');
      localStorage.setItem('appy-vote-user', id);
      localStorage.setItem('appy-vote-user-token', token);
      CheckUserStatus(id);
    } else if (localStorage.getItem('appy-vote-user')) {
      console.log('I am here too');
      let user = localStorage.getItem('appy-vote-user');
      console.log(user);
      CheckUserStatus(user);
    }
    //If user is not logged in
    else {
      console.log('OH what the heck');
      setShowLogin(true);
    }
  };

  const CheckUserStatus = async (id) => {
    console.log('What the fuck is this?');
    let user = await userService.getUserDetails(id);
    console.log(user);
    if (!user.completed) {
      setShowCompleteForm(true);
    } else if (!user.voteStatus) {
      setShowVoteForm(true);
    } else {
      setShowLogoutForm(true);
    }
  };

  //JSX => JavaScript Syntax
  return (
    <div className={mainStyle.App}>
      <Sidebar />

      <div className={mainStyle.mainContent}>
        <div className={mainStyle.circle1}></div>
        <div className={mainStyle.circle2}></div>
        <div className={styles.voteDiv}>
          <div className={styles.voteDivInfo}>
            <h1>
              Place a vote
              <br />
              if you haven't yet!
            </h1>
            <p>
              Check out BattleGround where we you can be updated with the latest
              and biggest news on the elections
            </p>
            <br />
            <a href="/battleground" className={styles.voteDivInfoVoteBtn}>
              To BattleGround
            </a>
          </div>
          <div className={styles.voteDivForms}>
            <div className={styles.voteDivFormsContainer}>
              {showLogin ? <LoginForm /> : null}
              {showCompleteForm ? <ProfileCompleteForm /> : null}
              {showVoteForm ? <VoteForm /> : null}
              {showLogoutForm ? <LogOutForm /> : null}
            </div>
          </div>
        </div>
        <div>
          <style jsx global>
            {`
              body {
                margin: 0px;
                padding: 0px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                  'Droid Sans', 'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              label {
                font-size: 15px;
                font-weight: 500;
              }
              #__next-prerender-indicator {
                display: none;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Vote;
