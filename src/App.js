import { Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import routes from './routes';
import AppBar from './Components/AppBar/AppBar.js';
import NotFoundView from './Views/NotFoundView';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const HomeView = lazy(() =>
  import('./Views/HomeView/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import(
    './Views/MoviesView/MoviesView.js' /* webpackChunkName: "movies-view" */
  ),
);
const MovieDetailsView = lazy(() =>
  import(
    './Views/MovieDetailsView/MovieDetailsView.js' /* webpackChunkName: "movieDetails-view" */
  ),
);

function App() {
  return (
    <div className="App">
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.movies} component={MoviesView} />
          <Route path={routes.movieDetails} component={MovieDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
