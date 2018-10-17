import React, {Component} from 'react';
import styles from './Drawer.module.scss';
import {arrayOf, bool, node, oneOfType, string} from 'prop-types';
import classNames from 'classnames';

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
        {children}
      </div>
    );
  }
}

export default Drawer;
