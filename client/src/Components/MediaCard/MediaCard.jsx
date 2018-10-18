import React, {Component} from 'react';
import styles from './MediaCard.module.scss';
import {string} from 'prop-types';
import {image} from 'react-icons-kit/feather/image';
import Icon from '../Icon';
import {Route, Link} from 'react-router-dom';
import Show from '../Show';
import {formatStr} from '../../utils/str';

class MediaCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  static propTypes = {
    imgExt: string,
    name: string.isRequired,
    className: string
  };

  static defaultProps = {
    imgExt: '',
    className: ''
  };

  imageUrl = 'https://image.tmdb.org/t/p/w500' + this.props.imgExt;

  imageOrIcon = this.props.imgExt ? (
    <div
      className={styles.posterImage}
      style={{
        backgroundImage: `url(${this.imageUrl})`
      }}
    />
  ) : (
    <Icon className={styles.mediaIcon} size={75} icon={image} />
  );

  render() {
    const {name, title} = this.props;
    const urlExt = formatStr(name || title);
    return (
      <div>
        <Link to={`/shows/${urlExt}`}>
          <div className={styles.MediaCard}>
            {this.imageOrIcon}

            <div className={styles.title}>{title || name}</div>
          </div>
        </Link>
        <Route
          path="/shows/:id"
          render={props => <Show show={this.props} {...props} />}
        />
      </div>
    );
  }
}

export default MediaCard;
