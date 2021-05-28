import { Component } from 'react';
import movieInfoFetch from '../../services/movieInfoFetch';
import s from './MovieDetailsInfo.module.css';
import PropTypes from 'prop-types';

class MovieDetailsInfo extends Component {
  state = {
    movieInfo: {},
  };

  async componentDidMount() {
    const movieInfo = await movieInfoFetch(this.props.movieId);

    this.setState({ movieInfo });
  }

  render() {
    const {
      poster_path,
      title,
      genres,
      overview,
      vote_average,
      release_date,
    } = this.state.movieInfo;
    const movieGenres = genres ? genres.map(genre => genre.name).join(' ') : '';
    const releaseYear = release_date ? release_date.slice(0, 4) : '';

    return (
      <div className={s.container}>
        {poster_path && (
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
        )}

        <div className={s.info_wrapper}>
          <h1 className={s.title}>{`${title} (${releaseYear})`}</h1>
          <p>User Score: {vote_average * 10}% </p>
          <h2 className={s.subtitle}>Overview</h2>
          <p>{overview}</p>
          <h2 className={s.subtitle}>Genres</h2>
          <p>{movieGenres}</p>
        </div>
      </div>
    );
  }
}

MovieDetailsInfo.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetailsInfo;
