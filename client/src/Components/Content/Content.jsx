import React, {Component} from 'react';
import Home from '../Home';
import Shows from '../Shows';
import Show from '../Show';
import ErrorMessage from '../ErrorMessage';
import styles from './Content.module.scss';
import {Switch, Route} from 'react-router-dom';

class Content extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/error" component={ErrorMessage} />
          {/* <Route
            path="/shows/:id"
            render={routeProps => <Show {...routeProps} {...props} />}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default Content;
