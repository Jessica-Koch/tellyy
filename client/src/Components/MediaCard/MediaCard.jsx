import React, {Component} from 'react';
import styles from './MediaCard.module.scss';
import {string} from 'prop-types';
import {image} from 'react-icons-kit/feather/image';
import Icon from '../Icon';
import {Link} from 'react-router-dom';
import {formatStr} from '../../utils/str';
import classNames from 'classnames';

class MediaCard extends Component {
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
    const {className, name, title} = this.props;
    const urlExt = formatStr(name || title);
    return (
      <div>
        <Link to={{pathname: `/shows/${urlExt}`, state: {item: this.props}}}>
          <div className={classNames(className, styles.MediaCard)}>
            {this.imageOrIcon}

            <div className={styles.title}>{title || name}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MediaCard;
