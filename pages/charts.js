import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import styles from './../styles/pages/charts.module.css';
import mainStyle from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';

const Charts = () => {
  const [ageData, setageData] = useState({});
  useEffect(() => {
    let tempData = {
      labels: ['18-30', '30-50', '50+'],
      datasets: [
        {
          // data[0] for US, data[1] for all other countries
          label: 'US',
          data: [617594, 181045, 55505],
          backgroundColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(0, 255, 132, 1)',
            'rgba(150, 99, 0, 1)',
          ],
        },
      ],
    };

    setageData(tempData);
  }, []);
  return (
    <div className={mainStyle.App}>
      <Sidebar />

      <div className={mainStyle.mainContent}>
        <div className={mainStyle.circle1}></div>
        <div className={mainStyle.circle2}></div>
        <div className={styles.chartDiv}>
          {ageData ? (
            <>
              <div className={styles.chartDivDougnut}>
                <h2>Votes according to age group</h2>
                <div class={styles.doughnutChartContainer}>
                  <Doughnut
                    data={ageData}
                    width={'70%'}
                    height={'70%'}
                    options={{
                      legend: {
                        display: true,
                        position: 'right',
                      },
                      // responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </div>
              <div className={styles.chartDivBubble}>
                <h2>Votes according to states</h2>
                <div class={styles.bubbleChartContainer}>
                  <BubbleChart
                    graph={{
                      zoom: 1,
                    }}
                    width={400}
                    height={400}
                    padding={10} // optional value, number that set the padding between bubbles
                    showLegend={false} // optional value, pass false to disable the legend.
                    valueFont={{
                      family: 'Arial',
                      size: 12,
                      color: '#fff',
                    }}
                    labelFont={{
                      family: 'Arial',
                      size: 16,
                      color: '#fff',
                    }}
                    //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                    data={bubbleChartData}
                  />
                </div>
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

const bubbleChartData = [
  { label: 'CRM', value: 1 },
  { label: 'API', value: 1 },
  { label: 'Data', value: 1 },
  { label: 'Commerce', value: 1 },
  { label: 'AI', value: 3 },
  { label: 'Management', value: 5 },
  { label: 'Testing', value: 6 },
  { label: 'Mobile', value: 9 },
  { label: 'Conversion', value: 9 },
  { label: 'Misc', value: 21 },
  { label: 'Databases', value: 22 },
  { label: 'DevOps', value: 22 },
  { label: 'Javascript', value: 29 },
  { label: 'Languages', value: 25 },
  { label: 'Front End', value: 26 },
  { label: 'Content', value: 26 },
];

export default Charts;
