import React, {Component} from 'react';
import {shape, string, array, number} from 'prop-types';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import Icon from '../Icon';
import {androidStar} from 'react-icons-kit/ionicons/androidStar';
import styles from './Show.module.scss';
import Rating from '../Rating';

class Show extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  static propTypes = {
    show: shape({
      name: string.isRequired,
      backdrop_path: string,
      overview: string.isRequired,
      vote: number
    })
  };

  getRating = Math.round(this.props.location.state.item.vote_average / 2);

  imageUrl =
    'https://image.tmdb.org/t/p/w1280' +
    this.props.location.state.item.backdrop_path;
  render() {
    const {location} = this.props;
    const {state} = location;
    const {item} = state;
    return (
      <div
        className={styles.Show}
        style={{
          backgroundImage: `url(${this.imageUrl})`
        }}
      >
        <div className={styles.overlay} />
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1 className={styles.title}>{item.name}</h1>
            <div className={styles.subHeader}>
              <div className={styles.rating}>
                <Rating
                  className={styles.starRating}
                  min={1}
                  max={5}
                  value={this.getRating}
                  icon={androidStar}
                />
                <span className={styles.percent}>{this.getRating} </span>
                <span className={styles.gray}>&nbsp;/&nbsp;5</span>
              </div>
            </div>
            <div className={styles.description}>{item.overview}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
