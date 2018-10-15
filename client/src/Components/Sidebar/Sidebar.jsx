import React, {PureComponent} from "react";
import styles from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
class Sidebar extends PureComponent {
  render() {
    return (
      <div className={styles.sidebar}>
        <h2 className={styles.decorativeScript}>Telly</h2>
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
              to="/puppy"
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
