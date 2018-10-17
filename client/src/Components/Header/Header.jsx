import React, {Component} from 'react';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  onSubmit = e => {
    const {searchValue} = this.state;
    e.preventDefault();
    fetch('/search-shows', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({searchValue})
    })
      .then(response => response.json())

      .catch(err => {
        console.error(err);
      });
  };

  onChange = ({target: {value: searchValue}}) => {
    this.setState({searchValue});
  };

  render() {
    const {searchValue} = this.state;
    return (
      <div className={styles.header}>
        <SearchBar
          value={searchValue}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Avatar
          userName="Lucinda McCarthy"
          imgUrl="https://source.unsplash.com/pAs4IM6OGWI"
        />
      </div>
    );
  }
}

export default Header;
