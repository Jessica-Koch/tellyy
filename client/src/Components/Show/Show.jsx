import React, {Component} from 'react';
import {shape, string, array, number} from 'prop-types';
import styled from 'react-emotion';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import Icon from '../Icon';
import {androidStar} from 'react-icons-kit/ionicons/androidStar';
import styles from './Show.module.scss';
import Rating from '../Rating';

const ImageDiv = styled('div')`
  position: relative;
  color: white;
  height: 100%;
  width: 100%;
  &:before {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('${props => props.src}');
    filter: grayscale(100%);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
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
      <ImageDiv className={styles.Show} src={this.imageUrl}>
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
      </ImageDiv>
    );
  }
}

export default Show;
