import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/components/VoteForm.module.css';

const VoteForm = () => {
  const [primaryParty, setPrimaryParty] = useState('');
  const [secondaryParty, setSecondaryParty] = useState('');
  const [comment, setComment] = useState('');

  const [partyList, setPartyList] = useState([]);
  const [secondaryPartyList, setSecondaryPartyList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Get country list from somewhere
    let tempList = [
      '',
      'Donald J. Trump',
      'Joe Biden',
      'Berney Sanders',
      'Eliazabeth Warren',
      'Mike Blooomberg',
    ];
    setPartyList(tempList);
    setSecondaryPartyList(['']);
  }, []);

  const selectPrimary = (event) => {
    //   Setting the value of primary party
    setPrimaryParty(event.target.value);
    // Remove the primary party from the secondary list
    let tempList = partyList.filter((party) => party !== event.target.value);
    setSecondaryPartyList(tempList);
  };

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    router.push('/overview');
  };

  // This will submit the login form
  const submitForm = async (event) => {
    event.preventDefault();
    //do some processing here
    let voteDetails = {
      primaryParty,
      secondaryParty,
      comment,
    };

    let registeredVote = await axios.post(
      // 'http://localhostL3001/api/votes/vote',
      'https://makai-test.herokuapp.com/api/votes/vote',
      voteDetails,
      {
        headers: {
          Authorization:
            'Bearer ' + localStorage.getItem('appy-vote-user-token'),
        },
      }
    );

    if (registeredVote) {
      localStorage.setItem('appy-vote-user-voteStatus', true);
      router.push('/overview');
    } else {
      alert('Vote not registered');
    }
  };

  //JSX => JavaScript Syntax
  return (
    <div className={styles.voteFormDiv}>
      <p className={styles.voteFormHeader}>Cast Your Vote</p>

      <form onSubmit={submitForm}>
        <div className={styles.voteFormRow}>
          <label>Primary Party:</label>
          <div>
            <select
              value={primaryParty}
              onChange={selectPrimary}
              required
              className={styles.voteFormNeoInput}
            >
              {partyList.map((elem, id) => (
                <option key={`Primary${id}`} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.voteFormRow}>
          <label>Secondary Party:</label>
          <div>
            <select
              value={secondaryParty}
              onChange={(event) => setSecondaryParty(event.target.value)}
              className={styles.voteFormNeoInput}
            >
              {secondaryPartyList.map((elem, id) => (
                <option key={`Primary${id}`} value={elem}>
                  {elem}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label>Comment</label>
          <div>
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              rows={5}
              cols={50}
              className={styles.voteFormNeoInput}
            ></textarea>
          </div>
        </div>

        <div>
          <button type="submit" className={styles.voteFormNeoSubmitButton}>
            Vote
          </button>
        </div>
      </form>

      <a onClick={logout} className={styles.profileLogoutBtn}>
        LogOut
      </a>
    </div>
  );
};

export default VoteForm;
