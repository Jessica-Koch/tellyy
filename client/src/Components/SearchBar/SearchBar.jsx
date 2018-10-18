import React, {Component} from 'react';
import {bool, func, string} from 'prop-types';
import {search} from 'react-icons-kit/feather/search';
import Icon from '../Icon';
import posed, {PoseGroup} from 'react-pose';

import styles from './SearchBar.module.scss';
import classNames from 'classnames';
const configBox = {
  off: {
    width: 150,
    height: 150,
    flip: true,
    background: '#69a7c2'
  },
  on: {
    width: '90vw',
    height: '90vh',
    flip: true,
    background: '#035D75'
  }
};
const Box = posed.form(configBox);
class SearchBar extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    className: string.isRequired,
    placeholder: string,
    value: string.isRequired
  };

  static defaultProps = {
    placeholder: ''
  };

  render() {
    const {className, onSubmit, onChange, placeholder, value} = this.props;
    return (
      <Box
        {...this.props}
        onSubmit={onSubmit}
        className={classNames(className, styles.SearchBar)}
      >
        <label className={styles.expandSearch}>
          <Icon className={styles.icon} icon={search} />
          <input
            type="text"
            name="title"
            onChange={onChange}
            className={styles.searchInput}
            placeholder={placeholder}
            value={value}
          />
        </label>
      </Box>
    );
  }
}

export default SearchBar;
