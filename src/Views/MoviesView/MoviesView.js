import { Component } from 'react';
import { toast } from 'react-toastify';

import MoviesList from '../../Components/MoviesList/MoviesList';
import moviesListFetch from '../../services/moviesListFetch';

import s from './MoviesView.module.css';

class MoviesView extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  async componentDidMount() {
    const query = this.props.location.search.split('=')[1];

    if (query) {
      const movies = await moviesListFetch(query);
      this.setState({ movies });
    }
  }

  onSubmitForm = async e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (!searchQuery) {
      toast.warn('Enter your search query');
    } else {
      const movies = await moviesListFetch(searchQuery);
      this.setState({ movies });

      this.props.history.push(`${this.props.match.url}?query=${searchQuery}`);
    }
  };

  onTyping = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery, movies } = this.state;

    return (
      <div className={s.background}>
        <form className={s.form} onSubmit={this.onSubmitForm}>
          <input
            className={s.input}
            autoFocus
            placeholder="Search for a movie"
            type="text"
            onChange={this.onTyping}
            value={searchQuery}
          />

          <button className={s.button} type="submit">
            Search
          </button>
        </form>

        {movies !== [] && (
          <MoviesList location={this.props.location} movies={movies} />
        )}
      </div>
    );
  }
}

export default MoviesView;
