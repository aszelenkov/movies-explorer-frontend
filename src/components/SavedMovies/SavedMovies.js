import './SavedMovies.css'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';


function SavedMovies() {
  return (
    <main className='savedMovies savedMovies_large'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;