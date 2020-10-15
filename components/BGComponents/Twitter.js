import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import { ImTwitter } from 'react-icons/im';

const Twitter = () => {
  return (
    <>
      <h1>
        Twitter&nbsp; <ImTwitter size={30} />
      </h1>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'BarackObama',
        }}
        options={{ tweetLimit: 10 }}
      />
    </>
  );
};

export default Twitter;
