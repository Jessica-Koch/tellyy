import React, {Component} from 'react';
import {bool, func, string} from 'prop-types';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import Icon from '../Icon';
import styles from './SearchBar.module.scss';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    value: string.isRequired
  };

  render() {
    const {onSubmit, onChange, value} = this.props;
    return (
      <form onSubmit={onSubmit} className={styles.SearchBar}>
        <label className={styles.expandSearch}>
          <Icon className={styles.icon} icon={iosSearchStrong} />
          <input
            type="text"
            name="title"
            onChange={onChange}
            className={styles.searchInput}
            placeholder="Search shows..."
            value={value}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
