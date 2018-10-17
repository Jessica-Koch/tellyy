import React, {Component} from 'react';
import {string, array, number} from 'prop-types';
import Icon from '../Icon';
import {Switch, Route} from 'react-router-dom';
import Show from '../Show';
import styles from './Shows.module.scss';

const Shows = props => {
  console.log;
  return (
    <div className="Shows">
      <Switch>
        <Route exact path="/shows/:id" render={props => <Show {...props} />} />
      </Switch>
    </div>
  );
};

export default Shows;
