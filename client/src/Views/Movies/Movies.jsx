import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import MediaCard from '../../Components/MediaCard';
import ErrorMessage from '../../Components/ErrorMessage';
import Show from '../../Components/Show';
import styles from './Movies.module.scss';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      moviesNotFound: '',
      movies: []
    };
  }

  componentDidMount() {
    fetch('/get-movies-popular')
      .then(res => res.json())
      .then(data => {
        if (data.status_code === 404) {
          this.setState({isLoading: false, moviesNotFound: 404});
        } else {
          this.setState({isLoading: false, movies: data.data.results});
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  renderShow = (show, i) => {
    return (
      <MediaCard
        className={styles.show}
        key={`${show.name}-${i}`}
        imgExt={show.poster_path}
        name={show.name}
        {...show}
      />
    );
  };

  render() {
    const PopularMovies =
      this.state.movies === undefined ? (
        <Spinner />
      ) : (
        this.state.movies.map((s, i) => {
          return this.renderShow(s, i);
        })
      );

    const currentView = this.state.isLoading ? <Spinner /> : PopularMovies;
    return (
      <div className={styles.Movies}>
        {currentView}
        <Route
          path="/movies/:id"
          render={props => <Show {...this.state} {...props} />}
        />
      </div>
    );
  }
}

export default Movies;
