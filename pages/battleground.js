import React, { useState, useEffect } from 'react';
import styles from './../styles/pages/battleground.module.css';
import mainStyle from '../styles/Home.module.css';

import Forum from '../components/BGComponents/Forum';
import Twitter from '../components/BGComponents/Twitter';
import News from '../components/BGComponents/News';
import Youtube from '../components/BGComponents/Youtube';
import Sidebar from '../components/Sidebar';
import Comments from '../components/BGComponents/Comments';
import Tlk from '../components/BGComponents/Tlk';

const BattleGround = () => {
  return (
    <div className={mainStyle.App}>
      <Sidebar />

      <div className={mainStyle.mainContent}>
        <div className={mainStyle.circle1}></div>
        <div className={mainStyle.circle2}></div>
        <div className={styles.header}>
          <h1>AppyVote</h1>
        </div>

        <div className={styles.bgContent}>
          <div className={styles.bgTwitter}>
            <Twitter />
          </div>
          <div className={styles.bgYoutube}>
            <Youtube />
          </div>
          <div className={styles.bgNews}>
            <News />
          </div>
          <div className={styles.bgForum}>
            <Forum />
          </div>
          <div className={styles.bgComment}>
            <Comments />
          </div>
          <div className={styles.bgTlk}>
            <Tlk />
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
};

export default BattleGround;
