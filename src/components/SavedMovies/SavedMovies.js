import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';


function SavedMovies() {
  return (
    <main className='page__main page__main_screen_movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;