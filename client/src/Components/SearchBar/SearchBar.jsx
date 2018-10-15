import React, {PureComponent} from 'react';
import {func, string} from 'prop-types';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import Icon from '../Icon';
import styles from './SearchBar.module.scss';

class SearchBar extends PureComponent {
  static propTypes = {
    onSubmit: func.isRequired,
    value: string.isRequired
  };

  render() {
    const {onSubmit, onChange, value} = this.props;
    return (
      <form
        onSubmit={onSubmit}
        action="/search-shows"
        className={styles.SearchBar}
      >
        <label className={styles.expandSearch}>
          <Icon className={styles.icon} icon={iosSearchStrong} />
          <input
            type="text"
            name="search"
            onChange={onChange}
            className={styles.searchInput}
            placeholder="Search Shows..."
            value={value}
            {...this.props}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
