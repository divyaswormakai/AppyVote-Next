import React, { useState, useEffect } from 'react';
import battlegroundService from '../../utils/battlegroundService';
import styles from '../../styles/pages/battleground.module.css';

const Forum = () => {
  const [forumData, setForumData] = useState([]);

  useEffect(() => {
    InitialDataCollection();
  }, []);

  const InitialDataCollection = async () => {
    try {
      let data = await battlegroundService.getForumData();
      setForumData(data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <h1>Forum</h1>
      <div className={styles.bgForumContent}>
        {forumData.length > 0
          ? forumData.map((item, indx) => (
              <div
                key={`Forum-item-${indx}`}
                className={styles.itemLinkContent}
              >
                <a href={item.url} className={styles.itemLink}>
                  <p className={styles.itemLinkHeader}>
                    <b>{item.author}</b>{' '}
                    <p className={styles.itemLinkTime}>
                      {item.date},{item.time}
                    </p>
                  </p>
                  <p className={styles.itemLinkDesc}>{item.text}</p>
                  <p className={styles.itemLinkReadMore}>Read more...</p>
                </a>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Forum;
