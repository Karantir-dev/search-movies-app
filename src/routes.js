const routes = {
  home:
    '/' /* </HomeView> домашняя страница со списком популярных кинофильмов.*/,
  movies:
    '/movies' /*<MoviesView>, страница поиска фильмов по ключевому слову.*/,
  movieDetails:
    '/movies/:movieId' /*<MovieDetailsView>, страница с детальной информацией о кинофильме.*/,
  cast:
    '/movies/:movieId/cast' /* <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.*/,
  review:
    '/movies/:movieId/reviews' /*  <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>. */,
};

export default routes;
