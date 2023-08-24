import React from 'react';
import Header from '../../Header/Header'
import SavedMovies from '../../SavedMovies/SavedMovies'
import Footer from '../../Footer/Footer'

function SavedMoviesScreen({ 
  loggedIn, 
  savedMovies, 
  onDeleteCard 
}) {
  return (
    <div className="page-with-footer">
      <Header loggedIn={loggedIn}/>
      <div className="content">
        <SavedMovies 
          savedMovies={savedMovies}
          onDeleteCard={onDeleteCard}
        />
      </div>
      <Footer />
    </div>
  );
}

export default SavedMoviesScreen;