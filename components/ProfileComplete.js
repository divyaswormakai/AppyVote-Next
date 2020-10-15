import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import userService from './../utils/userService';
import styles from '../styles/components/ProfileComplete.module.css';

let tempList = ['US', 'UK', 'Canada', 'Nepal'];

const ProfileCompleteForm = () => {
  const [age, setAge] = useState();
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [idNo, setId] = useState('');
  const [countryList, setCountryList] = useState([]);

  const [savedUser, setSavedUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // Get country list from somewhere
    setCountry(tempList[0]);
    setCountryList(tempList);

    // Check if the user profile is completed
    setUser();
  }, []);

  const setUser = async () => {
    try {
      let user;
      if (router.query.id) {
        user = await userService.getUserDetails(router.query.id);
      } else {
        user = await userService.getUserDetails(
          localStorage.getItem('appy-vote-user')
        );
      }
      if (user.error) {
        throw new Error(user.error.message);
      }
      console.log(user);
      localStorage.setItem('appy-vote-user', user.id);

      //If form is complete
      if (user.completed) {
        router.push('/overview');
      }
      setSavedUser(user);
    } catch (err) {
      alert('Error:', ErrorEvent.message);
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    router.push('/overview');
  };

  // This will submit the login form
  const submitForm = async (event) => {
    //do some processing here
    // This is where we interact with the backend to login
    // redirecto to some page if registration successful
    try {
      event.preventDefault();

      let userDetails = { ...savedUser };
      if (age >= 18) {
        userDetails.age = age;
        userDetails.state = state;
        userDetails.country = country;
        userDetails.personalID = idNo;
        userDetails.completed = true;

        let updatedUser = await userService.completeProfile(userDetails);
        if (updatedUser) {
          localStorage.setItem('appy-vote-user', updatedUser.id);
          router.reload();
        } else {
          throw new Error('Could not update error');
        }
      } else {
        alert('You should be greater or equal to 18');
      }
      //User has been saved here...
    } catch (err) {
      console.log(err.message);
      alert('Something is wrong: ', err.message);
    }
  };

  //JSX => JavaScript Syntax
  return (
    <div className={styles.profileCompleteDiv}>
      <p className={styles.profileCompleteHeader}>
        Complete profile before voting
      </p>

      {savedUser ? (
        <form onSubmit={submitForm} className={styles.profileCompleteForm}>
          <div>
            <div>
              <input
                type="text"
                value={savedUser.displayName}
                disabled
                className={styles.neoInputDisabled}
              />
            </div>
          </div>
          {/* for email */}
          <div>
            <input
              type="text"
              value={savedUser.email}
              disabled
              className={styles.neoInputDisabled}
            />
          </div>
          {/* this will be a row */}
          <div>
            <div>
              <input
                type="number"
                onChange={(event) => setAge(event.target.value)}
                value={age}
                placeholder="Age"
                className={styles.neoInput}
                required
              />
            </div>
            <div>
              <input
                type="text"
                onChange={(event) => setState(event.target.value)}
                value={state}
                className={styles.neoInput}
                placeholder="State"
                required={country === 'US'}
              />
            </div>
          </div>

          <div>
            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className={styles.neoInput}
              required
            >
              {countryList.map((elem, id) => (
                <option key={`Country${id}`} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="text"
              onChange={(event) => setId(event.target.value)}
              value={idNo}
              className={styles.neoInput}
              placeholder="National id(optional)"
            />
          </div>

          <div>
            <button type="submit" className={styles.profileNeoSubmitButton}>
              Complete My Profile
            </button>
          </div>

          <a onClick={logout} className={styles.profileLogoutBtn}>
            LogOut
          </a>
        </form>
      ) : null}
    </div>
  );
};

export default ProfileCompleteForm;
