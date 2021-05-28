import { Component } from 'react';
import axios from 'axios';
import s from './MovieReview.module.css';

class MovieReview extends Component {
  state = {
    content: '',
    author: '',
  };

  async componentDidMount() {
    const KEY = 'f7b7e95d0e8593ff76c8cd5076f4ad60';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    try {
      const response = await axios.get(
        `${BASE_URL}movie/${this.props.match.params.movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
      );

      if (response.data.results !== []) {
        const { content, author } = response.data.results[0];

        this.setState({ content, author });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { content, author } = this.state;

    return (
      <>
        {content ? (
          <div className={s.wrapper}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </div>
        ) : (
          <p className={s.withoutReview}>
            We don`t have any reviews for this movie.
          </p>
        )}
      </>
    );
  }
}

export default MovieReview;
