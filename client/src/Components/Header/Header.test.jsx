import React from 'react';
import Header from './Header';
import {renderTest} from '../../utils/testUtils';
import {shallow} from 'enzyme';
import SearchBar from '../SearchBar';

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
});
