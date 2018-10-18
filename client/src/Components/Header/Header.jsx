import React, {Component} from 'react';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';
import Drawer from '../Drawer';
import Spinner from '../Spinner';
import Show from '../Show';
import Icon from '../Icon';
import {iosArrowUp} from 'react-icons-kit/ionicons/iosArrowUp';
import MediaCard from '../MediaCard';
import Box from '../Box';

import {Switch, Route} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchResults: [],
      open: false,
      searchValue: '',
      errorCode: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('onsubmit');
    this.handleOpen(e);
    const {searchValue} = this.state;

    this.setState({isLoading: true});

    fetch('/search-media', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({searchValue})
    })
      .then(response => response.json())
      .then(data => {
        if (data.status_code === 34) {
          this.setState({isLoading: false, errorCode: 404});
        } else {
          this.setState({
            isLoading: false,
            searchResults: data.data.results,
            open: true
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  onChange = ({target: {value: searchValue}}) => {
    this.setState({searchValue});
  };

  renderResult = (result, i) => {
    return (
      <MediaCard
        className={styles.show}
        key={`${result.name}-${i}`}
        imgExt={result.poster_path}
        name={result.name}
        {...result}
      />
    );
  };

  renderSearchResults = () =>
    this.state.searchResults.map((s, i) => {
      return this.renderResult(s, i);
    });

  renderNotFound = <div>We couldn't find what you were looking for.</div>;

  handleOpen = e => {
    e.stopPropagation();
    this.setState({
      open: true
    });
  };

  handleClose = e => {
    this.setState({
      open: false
    });
  };

  render() {
    const {open, isLoading, searchValue, searchResults} = this.state;

    return isLoading ? (
      <Spinner />
    ) : (
      <div className={styles.header} onClick={this.handleClose}>
        <div className={styles.wrapper}>
          <SearchBar
            className={styles.headerSearch}
            value={searchValue}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            pose={open ? 'on' : 'off'}
            placeholder="Search media"
          />
          <Avatar
            userName="Lucinda McCarthy"
            imgUrl="https://source.unsplash.com/pAs4IM6OGWI"
          />
        </div>

        <Drawer className={styles.drawer} isExpanded={open}>
          <div className={styles.centered}>
            <Icon onClick={!this.state.open} size={20} icon={iosArrowUp} />
          </div>
          <div className={styles.resultsHeader}>
            {searchResults.length > 0
              ? `${searchResults.length} shows matched your search`
              : this.renderNotFound}
          </div>
          {this.renderSearchResults()}
        </Drawer>
      </div>
    );
  }
}

export default Header;
