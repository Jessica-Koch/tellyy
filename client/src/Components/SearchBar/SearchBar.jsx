import React, {Component} from 'react';
import {func, string} from 'prop-types';
import {search} from 'react-icons-kit/feather/search';
import Icon from '../Icon';
import styles from './SearchBar.module.scss';
import classNames from 'classnames';

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
      <form
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
      </form>
    );
  }
}

export default SearchBar;
