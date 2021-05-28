import axios from 'axios';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

async function moviesListFetch(query) {
  const KEY = 'f7b7e95d0e8593ff76c8cd5076f4ad60';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  let movies = [];

  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=true`,
    );

    movies = response.data.results;

    if (movies.length === 0) {
      toast('Did not find films for your request.', { type: 'warning' });
    }
  } catch (error) {
    console.log(error);
  }

  return movies;
}

moviesListFetch.propTypes = {
  query: PropTypes.string,
};

export default moviesListFetch;
