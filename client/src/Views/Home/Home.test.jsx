/* eslint-env jest */
import React from 'react';
import Home from './Home';
import {renderTest} from '../../utils/testUtils';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

import {shallow} from 'enzyme';

describe('Home', () => {
  renderTest(Home);

  describe('error message', () => {
    it('renders error message if the showsNotFound is 404', () => {
      const wrapper = shallow(<Home />);
      wrapper.setState({showsNotFound: 404});
      const errorMsg = wrapper.find(ErrorMessage);
      console.log('error message', errorMsg);
      expect(errorMsg).toBeTruthy();
    });
  });

  describe('is loading', () => {
    it('renders spinner when loading data', () => {
      const wrapper = shallow(<Home />);
      wrapper.setState({isLoading: true});
      const spinner = wrapper.find(Spinner);
      console.log('error message', spinner);
      expect(spinner.length).toBe(1);
    });
  });
});
