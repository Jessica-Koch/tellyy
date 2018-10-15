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
    e.preventDefault();

    const {searchValue} = this.state;
    fetch('/search-shows', {
      method: 'POST',
      body: JSON.stringify(searchValue),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then(res => res.json())
      .catch(err => {
        console.error(err);
      });
  };

  onChange = ({target: {value: searchValue}}) => {
    this.setState({searchValue});
  };

  render() {
    const {searchValue} = this.state;
    console.log('this state', this.state);
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
