import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://makai-test.herokuapp.com';

const youtubeData = [
  { title: 'ABC News Live', url: 'https://www.youtube.com/embed/w_Ma8oQLmSM' },
  {
    title: 'How the US election works',
    url: 'https://www.youtube.com/embed/LY8L6C7tsx8',
  },

  {
    title:
      'US election 2020: Vice presidential debate between Mike Pence and Kamala Harris',
    url: 'https://www.youtube.com/embed/6Gk8zA2AXc4',
  },
];

const getForumData = async () => {
  try {
    console.log('ASDFAAASS');
    let res = await axios.get('/api/forum');
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

const getYoutubeData = async () => {
  try {
    return youtubeData;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

const getNewsData = async () => {
  try {
    let res = await axios.get('/api/news');
    console.log('ASDFAAASS');

    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export default { getForumData, getYoutubeData, getNewsData };
