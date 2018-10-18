import React, {Component} from 'react';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';
import Spinner from '../Spinner';
import {PoseGroup} from 'react-pose';
import MediaCard from '../MediaCard';
import Modal, {Shade} from '../Modal';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchResults: [],
      isVisible: false,
      searchValue: '',
      errorCode: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('onsubmit');
    this.handleisVisible(e);
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
            isVisible: true
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

  handleisVisible = e => {
    e.stopPropagation();
    this.setState({
      isVisible: true
    });
  };

  handleClose = e => {
    this.setState({
      isVisible: false
    });
  };

  render() {
    const {isVisible, isLoading, searchValue, searchResults} = this.state;

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
            pose={isVisible ? 'on' : 'off'}
            placeholder="Search media"
          />
          <Avatar
            userName="Lucinda McCarthy"
            imgUrl="https://source.unsplash.com/pAs4IM6OGWI"
          />
        </div>
        <PoseGroup>
          {isVisible && [
            <Shade key="shade" className={styles.shade}>
              <Modal key="modal" className={styles.modal}>
                <div className={styles.centered}>
                  {searchResults.length > 0
                    ? `${searchResults.length} shows matched your search`
                    : this.renderNotFound}
                </div>
                {this.renderSearchResults()}
              </Modal>
            </Shade>
          ]}
        </PoseGroup>
      </div>
    );
  }
}

export default Header;
