import { NavLink } from 'react-router-dom';
import s from './MoviesList.module.css';
import PropTypes from 'prop-types';

function MoviesList({ movies, location }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li className={s.listItem} key={id}>
            <NavLink
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={title}
                width="200"
              />
              <p className={s.title}>{title}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

export default MoviesList;
