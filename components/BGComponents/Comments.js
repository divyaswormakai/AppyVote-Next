import React, { useState, useEffect } from 'react';
import battlegroundService from '../../utils/battlegroundService';
import styles from '../../styles/pages/battleground.module.css';
import socketIOClient from 'socket.io-client';

const Comments = () => {
  const [comments, setComments] = useState([]);

  let socket = null;
  useEffect(() => {
    // let endpoint = 'http://localhost:3001';
    let endpoint = 'https://makai-test.herokuapp.com';
    socket = socketIOClient(endpoint);
    socket.on('getComments', (data) => {
      setComments(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Comments</h1>
      <div className={styles.bgForumContent}>
        {comments.length > 0
          ? comments.map((item, indx) => (
              <div
                key={`Comment-item-${indx}`}
                className={styles.itemLinkContent}
              >
                <a href={item.url} className={styles.itemLink}>
                  <p className={styles.itemLinkHeader}>
                    <b>{item.user}</b>{' '}
                  </p>
                  <p className={styles.comment}>{item.comment}</p>
                </a>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Comments;
