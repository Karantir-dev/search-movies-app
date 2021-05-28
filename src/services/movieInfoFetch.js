import axios from 'axios';
import PropTypes from 'prop-types';

async function movieInfoFetch(id) {
  const KEY = 'f7b7e95d0e8593ff76c8cd5076f4ad60';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  let movieInfo = {};

  await axios
    .get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`)
    .then(response => {
      movieInfo = response.data;
    })
    .catch(err => console.log(err));

  return movieInfo;
}

movieInfoFetch.propTypes = {
  id: PropTypes.string,
};

export default movieInfoFetch;
