import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
         // console.log(response) first to see what to refer to things by. is it data? what?
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
    </div>
  );
}




