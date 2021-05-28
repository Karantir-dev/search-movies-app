import AdditionalInfo from '../../Components/AdditionalInfo/AdditionalInfo';
import MovieDetailsInfo from '../../Components/MovieDetailsInfo/MovieDetailsInfo';
import routes from '../../routes';
import s from './MovieDetailsView.module.css';

function MovieDetailsView({ location, history, match }) {
  const onGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  const { movieId } = match.params;

  return (
    <div className={s.background}>
      <button className={s.button} type="button" onClick={onGoBack}>
        Go back
      </button>

      <MovieDetailsInfo movieId={movieId} />

      <AdditionalInfo id={movieId} location={location?.state?.from} />
    </div>
  );
}

export default MovieDetailsView;
