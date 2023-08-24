import React from 'react';
import Header from '../../Header/Header'
import Main from '../../Main/Main'
import Footer from '../../Footer/Footer'
function LandingPromo({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPromo;
