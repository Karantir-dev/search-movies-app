import { NavLink, Route } from 'react-router-dom';
import routes from '../../routes';
import MovieCast from '../MovieCast/MovieCast';
import MovieReview from '../MovieReview/MovieReview';
import s from './AdditionalInfo.module.css';
import PropTypes from 'prop-types';

function AdditionalInfo({ id, location }) {
  return (
    <>
      <div className={s.wrapper}>
        <p className={s.title}>Additional information</p>
        <NavLink
          className={s.link}
          to={{
            pathname: `/movies/${id}/cast`,
            state: { from: location },
          }}
        >
          Cast
        </NavLink>
        <NavLink
          className={s.link}
          to={{
            pathname: `/movies/${id}/reviews`,
            state: { from: location },
          }}
        >
          Reviews
        </NavLink>
      </div>

      <Route exact path={routes.cast} component={MovieCast} />
      <Route exact path={routes.review} component={MovieReview} />
    </>
  );
}

AdditionalInfo.propTypes = {
  id: PropTypes.string,
  location: PropTypes.object,
};

export default AdditionalInfo;
