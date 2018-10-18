import React, {Component} from 'react';
import Home from '../Home';
import ErrorMessage from '../../Components/ErrorMessage';
import styles from './Content.module.scss';
import {Switch, Route} from 'react-router-dom';
import Show from '../../Components/Show';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div className={styles.content}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/error" component={ErrorMessage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
