import React from 'react';
import Header from './Header';
import {renderTest} from '../../utils/testUtils';
import {shallow} from 'enzyme';
import Spinner from '../Spinner';

describe('Header', () => {
  renderTest(Header);

  describe('onChange', () => {
    it('updates state on change', () => {
      const wrapper = shallow(<Header />);
      const instance = wrapper.instance();
      expect(wrapper.state('searchValue')).toBe('');
      instance.onChange({target: {value: 'text'}});
      expect(wrapper.state('searchValue')).toBe('text');
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
