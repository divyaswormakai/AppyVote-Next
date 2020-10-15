import React from 'react';
import { useRouter } from 'next/router';
import logoutStyles from '../styles/components/LogOut.module.css';
import voteStyle from '../styles/components/VoteForm.module.css';

const LogOutForm = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('appy-vote-user');
    localStorage.removeItem('appy-vote-user-token');
    router.push('/overview');
  };

  return (
    <div className={logoutStyles.logOutFormDiv}>
      <p className={voteStyle.voteFormHeader}>
        Thanks for voting. Check overview to check realtime status or check the
        battleground to keep yourself updated with the news.
      </p>
      <button onClick={logout} className={logoutStyles.logoutBtn}>
        Log out
      </button>
    </div>
  );
};

export default LogOutForm;
