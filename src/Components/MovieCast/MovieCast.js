import axios from 'axios';
import { Component } from 'react';
import s from './MovieCast.module.css';

class MovieCast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const KEY = 'f7b7e95d0e8593ff76c8cd5076f4ad60';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    try {
      const response = await axios.get(
        `${BASE_URL}movie/${this.props.match.params.movieId}/credits?api_key=${KEY}&language=en-US`,
      );

      this.setState({ actors: response.data.cast });
    } catch (error) {
      console.log(error);
    }
  }

  getActorsWithPhoto = () => {
    return this.state.actors.reduce((acc, { id, name, profile_path }) => {
      if (profile_path) {
        acc.push(
          <li className={s.listItem} key={id}>
            <img
              className={s.photo}
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <p className={s.name}>{name}</p>
          </li>,
        );
      }

      return acc;
    }, []);
  };

  render() {
    return <ul className={s.list}>{this.getActorsWithPhoto()}</ul>;
  }
}

export default MovieCast;
