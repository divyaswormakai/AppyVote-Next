import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import socketIOClient from 'socket.io-client';
import styles from './../styles/pages/overview.module.css';
import mainStyle from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';

let tempData = {
  labels: ['Primary Votes', 'Secondary Votes'],
  datasets: [
    {
      label: 'Berney Sanders',
      data: [2, 1],
      backgroundColor: 'rgba(0, 99, 132, 1)',
    },
    {
      label: 'Donald J. Trump',
      data: [1, 0],
      backgroundColor: 'rgba(255, 255, 132, 1)',
    },
  ],
};

const Overview = () => {
  const [chartData, setChartData] = useState({});
  let socket = null;
  useEffect(() => {
    // let endpoint = 'http://localhost:3001';
    let endpoint = 'https://makai-test.herokuapp.com';
    socket = socketIOClient(endpoint);
    socket.on('getOverviewData', (data) => {
      console.log(data);
      setChartData(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  //JSX => JavaScript Syntax
  return (
    <div className={mainStyle.App}>
      <Sidebar />

      <div className={mainStyle.mainContent}>
        <div className={mainStyle.circle1}></div>
        <div className={mainStyle.circle2}></div>
        <div className={styles.overviewChart}>
          <div className={styles.overviewHeader}>
            Who do you thing will win the next election?
          </div>
          {chartData ? (
            <>
              <div className={styles.overviewChartDataContainer}>
                <Bar
                  data={chartData}
                  options={{
                    title: {
                      display: 'Display Title',
                      text: 'Current Statistics',
                      fontSize: 30,
                      fontColor: 'black',
                    },
                    legend: {
                      display: true,
                      position: 'top',
                    },
                    // responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </>
          ) : null}
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

export default Overview;
