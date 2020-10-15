import React, { useState, useEffect } from 'react';
import battlegroundService from '../../utils/battlegroundService';
import { ImYoutube } from 'react-icons/im';
import styles from '../../styles/pages/battleground.module.css';

const Youtube = () => {
  const [youtubeData, setYoutubeData] = useState([]);

  useEffect(() => {
    InitialDataCollection();
  }, []);

  const InitialDataCollection = async () => {
    try {
      let data = await battlegroundService.getYoutubeData();
      setYoutubeData(data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <h1>
        <ImYoutube size={40} color="#ff0000" />
        &nbsp;Youtube
      </h1>
      <div className={styles.bgForumContent}>
        {youtubeData.length > 0
          ? youtubeData.map((item, indx) => (
              <div key={`Youtube-${indx}`} className={styles.itemLinkYoutube}>
                <p className={styles.itemLinkHeader}>
                  <b>{item.title}</b>
                </p>
                <iframe
                  width="100%"
                  height="100%"
                  src={item.url}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Youtube;
