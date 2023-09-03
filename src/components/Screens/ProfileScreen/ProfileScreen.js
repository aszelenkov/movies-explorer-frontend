import React from 'react';
import Header from '../../Header/Header'
import Profile from '../../Profile/Profile'

function ProfileScreen({ 
  loggedIn, 
  onSignOut, 
  handleConfirmStatus, 
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Profile 
        onSignOut={onSignOut} 
        handleConfirmStatus={handleConfirmStatus}
      />
    </>
  );
}

export default ProfileScreen;