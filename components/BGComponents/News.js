import React, { useState, useEffect } from 'react';
import battlegroundService from '../../utils/battlegroundService';
import styles from '../../styles/pages/battleground.module.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    InitialDataCollection();
  }, []);

  const InitialDataCollection = async () => {
    try {
      let data = await battlegroundService.getNewsData();
      setNewsData(data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <h1>Headlines</h1>
      <div className={styles.bgNewsContent}>
        {newsData.length > 0
          ? newsData.map((item, indx) => (
              <div key={`Headlines-${indx}`} className={styles.itemLinkContent}>
                <a href={item.url} className={styles.itemLink}>
                  <p className={styles.itemLinkHeader}>
                    <b>{item.title}</b>
                    <p className={styles.itemLinkTime}>
                      {item.date}, {item.time}
                    </p>
                  </p>

                  {item.imgUrl ? (
                    <img
                      src={item.imgUrl}
                      alt="Image"
                      width="100%"
                      height="100%"
                      className={styles.itemLinkContentImg}
                    />
                  ) : null}
                </a>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default News;
