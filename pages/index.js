import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomeStyle from '../styles/pages/home.module.css';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    CheckRedirect();
  }, []);

  const CheckRedirect = () => {
    let path = window.location.pathname;
    let params = new URL(document.location).searchParams;
    console.log(params.get('id'));
    if (path !== '/') {
      console.log(path);
      if (path === '/vote') {
        console.log('In vote');
        if (params.get('id') && params.get('token')) {
          console.log('We have the parameters');
          localStorage.setItem('appy-vote-user', params.get('id'));
          localStorage.setItem('appy-vote-user-token', params.get('token'));
          router.push('/vote');
        } else {
          router.push('/vote');
        }
      }
      router.push(path);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>AppyVote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.App}>
        <Sidebar />

        <div className={styles.mainContent}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={HomeStyle.homeDiv}>
            <div className={HomeStyle.homeDivInfo}>
              <h1>Welcome to AppyVote...</h1>
              <p>
                An all-in-one platform where you can bet on who will win the
                elections, get all your news and tweets here.
              </p>
              <br />
              <a href="/vote" className={HomeStyle.homeDivInfoVoteBtn}>
                Vote Now
              </a>
            </div>
            <div className={HomeStyle.homeDivSvg}>
              <img src="/home.png" alt="Homelogo" />
            </div>
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
  );
}
