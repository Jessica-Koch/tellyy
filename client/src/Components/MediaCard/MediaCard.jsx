import React, {PureComponent} from "react";
import styles from "./MediaCard.module.scss";
import {string} from "prop-types";
import {image} from "react-icons-kit/ionicons/image";
import Icon from "../Icon";

class MediaCard extends PureComponent {
  static propTypes = {
    imgExt: string,
    name: string.isRequired,
    className: string
  };

  static defaultProps = {
    imgExt: "",
    className: ""
  };

  imageUrl = "https://image.tmdb.org/t/p/w500" + this.props.imgExt;

  imageOrIcon = this.props.imgExt ? (
    <div
      className={styles.posterImage}
      style={{
        backgroundImage: `url(${this.imageUrl})`
      }}
    />
  ) : (
    <Icon className={styles.mediaIcon} icon={image} />
  );

  render() {
    const {imgExt, name} = this.props;
    return (
      <div className={styles.MediaCard}>
        {this.imageOrIcon}
        <div className={styles.showInfo}>
          <div className={styles.title}>{name}</div>
        </div>
      </div>
    );
  }
}

export default MediaCard;
