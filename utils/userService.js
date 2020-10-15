import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://makai-test.herokuapp.com';

const getUserDetails = async (id) => {
  try {
    let user = await axios.get(`/api/users/profile/${id}`);
    if (user) {
      return user.data;
    } else {
      throw new Error('No user found');
    }
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

const completeProfile = async (userDetails) => {
  try {
    let user = await axios.post('/api/users/completeProfile', userDetails);
    if (user) {
      return user.data;
    } else {
      throw new Error('Update user failed');
    }
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export default { getUserDetails, completeProfile };
