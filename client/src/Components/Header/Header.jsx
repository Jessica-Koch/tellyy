import React, {Component} from 'react';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';
import Drawer from '../Drawer';
import Spinner from '../Spinner';
import MediaCard from '../MediaCard';
import Show from '../Show';
import {Route} from 'react-router-dom';

const getType = {
  tv: 'shows',
  movie: 'movies'
};
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchResults: [],
      isOpen: false,
      searchValue: '',
      errorCode: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
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
            isOpen: true
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
      console.log('s', s);
      return this.renderResult(s, i);
    });

  renderNotFound = <div>We couldn't find what you were looking for.</div>;

  render() {
    const {isOpen, isLoading, searchValue, searchResults} = this.state;
    console.log(searchResults.length);
    return isLoading ? (
      <Spinner />
    ) : (
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <SearchBar
            className={styles.headerSearch}
            value={searchValue}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            placeholder="Search media"
          />
          <Avatar
            userName="Lucinda McCarthy"
            imgUrl="https://source.unsplash.com/pAs4IM6OGWI"
          />
        </div>
        <Drawer className={styles.drawer} isExpanded={isOpen}>
          <div className={styles.resultsHeader}>
            {searchResults.length > 0
              ? `${searchResults.length} shows matched your search`
              : this.renderNotFound}
          </div>
          {this.renderSearchResults()}
          <Route
            path="/shows/:id"
            render={props => <Show {...this.state} {...props} />}
          />
        </Drawer>
      </div>
    );
  }
}

export default Header;
