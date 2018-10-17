import React, {Component} from "react";
import styles from "./Avatar.module.scss";
import {string} from "prop-types";
import {user} from "react-icons-kit/metrize/user";
import Icon from "../Icon";

class Avatar extends Component {
  static propTypes = {
    imgUrl: string.isRequired,
    userName: string.isRequired
  };

  imageOrIcon = this.props.imgUrl ? (
    <div
      className={styles.img}
      style={{backgroundImage: `url(${this.props.imgUrl})`}}
    />
  ) : (
    <Icon className={styles.icon} icon={user} />
  );

  render() {
    const {imgUrl, userName} = this.props;
    return (
      <div className={styles.Avatar}>
        {this.imageOrIcon}
        <div className={styles.accountInfo}>
          <div className={styles.user}>{userName}</div>
          <a className={styles.link} href="/">
            Manage Account
          </a>
        </div>
      </div>
    );
  }
}

export default Avatar;
