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
      showsNotFound: '',
      shows: []
    };
  }

  componentDidMount() {
    fetch('/get-shows-popular')
      .then(res => res.json())
      .then(data => {
        if (data.status_code === 404) {
          this.setState({isLoading: false, showsNotFound: 404});
        } else {
          this.setState({isLoading: false, shows: data.data.results});
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
    const PopularShows =
      this.state.showsNotFound === 404 ? (
        <div> {ErrorMessage} </div>
      ) : (
        this.state.shows.map((s, i) => {
          return this.renderShow(s, i);
        })
      );

    const currentView = this.state.isLoading ? <Spinner /> : PopularShows;
    return (
      <div className={styles.Movies}>
        {currentView}
        <Route
          path="/shows/:id"
          render={props => <Show {...this.state} {...props} />}
        />
      </div>
    );
  }
}

export default Movies;
