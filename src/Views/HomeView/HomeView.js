import { Component } from 'react';
import axios from 'axios';
import MoviesList from '../../Components/MoviesList/MoviesList';
import s from './HomeView.module.css';

class HomeView extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    const KEY = 'f7b7e95d0e8593ff76c8cd5076f4ad60';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    try {
      const response = await axios.get(
        `${BASE_URL}trending/all/week?api_key=${KEY}`,
      );

      this.setState(() => {
        const trending = response.data.results.filter(movie => movie.title);
        return { trending };
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className={s.background}>
        <h1 className={s.title}>Trending today</h1>

        {this.state.trending.length > 0 && (
          <MoviesList movies={this.state.trending} />
        )}
      </div>
    );
  }
}

export default HomeView;
