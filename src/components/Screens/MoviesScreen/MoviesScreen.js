import React from "react";
import Header from "../../Header/Header";
import Movies from "../../Movies/Movies";
import Footer from "../../Footer/Footer";

function MoviesScreen({ 
  loggedIn, 
  savedMovies, 
  onLikeCard, 
  onDeleteCard, 
  cards 
}) {
  return (
    <div className="page-with-footer">
      <Header loggedIn={loggedIn} />
      <div className="content">
        <Movies
          onLikeCard={onLikeCard}
          savedMovies={savedMovies}
          onDeleteCard={onDeleteCard}
          cards={cards}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MoviesScreen;
