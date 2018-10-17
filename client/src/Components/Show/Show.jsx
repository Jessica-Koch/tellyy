import React, {Component} from 'react';
import {shape, string, array, number} from 'prop-types';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import Icon from '../Icon';

import styles from './Show.module.scss';

class Show extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  static propTypes = {
    show: shape({
      name: string.isRequired,
      backdrop_path: string.isRequired,
      overview: string.isRequired,
      vote: number
    })
  };

  // componentDidMount() {
  //   fetch('/api/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({users}));
  // }
  render() {
    console.log('props', this.props);
    const {name, overview, vote} = this.props;
    return (
      <div className={styles.Show}>
        <h1>I'm the show page thank god</h1>
        <h1>{name}</h1>
        <div>{overview}</div>
      </div>
    );
  }
}

export default Show;
