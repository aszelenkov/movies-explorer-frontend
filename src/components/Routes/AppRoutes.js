import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPromo from '../Screens/LandingPromo/LandingPromo';
import MoviesScreen from '../Screens/MoviesScreen/MoviesScreen';
import SavedMoviesScreen from '../Screens/SavedMoviesScreen/SavedMoviesScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';
import NotFound from '../Screens/NotFound/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LandingPromo />} />
      <Route path='/movies' element={<MoviesScreen />} />
      <Route path='/saved-movies' element={<SavedMoviesScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
