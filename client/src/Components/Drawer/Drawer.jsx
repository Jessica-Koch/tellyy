import React, {Component} from 'react';
import posed from 'react-pose';
import Item from '../Box/Item';
import styles from './Drawer.module.scss';
import {arrayOf, bool, node, oneOfType, string} from 'prop-types';
import classNames from 'classnames';

const configContent = {
  off: {
    opacity: 0
  },
  on: {
    opacity: 1,
    delayChildren: 250,
    staggerChildren: 100
  }
};
const DrawerContent = posed.div(configContent);
class Drawer extends Component {
  static propTypes = {
    className: string,
    children: oneOfType([arrayOf(node), node]),
    isExpanded: bool.isRequired
  };

  render() {
    const {children, isExpanded, className} = this.props;
    const expanded = isExpanded ? styles.expanded : '';

    return (
      <div className={classNames(styles.Drawer, expanded, className)}>
        <DrawerContent className={styles.content}>{children}</DrawerContent>
      </div>
    );
  }
}

export default Drawer;
