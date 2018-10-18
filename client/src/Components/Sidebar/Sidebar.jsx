import React, {Component} from 'react';
import styles from './Sidebar.module.scss';
import {NavLink, Link} from 'react-router-dom';
import classNames from 'classnames';
class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <Link to="/">
          <h2 className={styles.decorativeScript}>Telly</h2>
        </Link>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarHeader}>Browse Telly</div>
          <div className={styles.linkList}>
            <NavLink
              to="/"
              activeClassName={styles.active}
              className={classNames(styles.activeClass, styles.sidebarListItem)}
            >
              Popular Shows
            </NavLink>
            <NavLink
              to="/movies"
              activeClassName={styles.active}
              className={classNames(styles.activeClass, styles.sidebarListItem)}
            >
              Movies
            </NavLink>
            <NavLink
              to="/puppy"
              activeClassName={styles.active}
              className={classNames(styles.activeClass, styles.sidebarListItem)}
            >
              Popular clips
            </NavLink>
            <NavLink
              to="/puppy"
              activeClassName={styles.active}
              className={classNames(styles.activeClass, styles.sidebarListItem)}
            >
              Watch Later
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
