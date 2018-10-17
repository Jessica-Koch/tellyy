import React from 'react';
import ErrorMessage from './ErrorMessage';
import {renderTest} from '../../utils/testUtils';
import {shallow} from 'enzyme';
import SearchBar from '../SearchBar';

describe('ErrorMessage', () => {
  renderTest(ErrorMessage);
});
