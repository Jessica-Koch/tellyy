/* eslint-env node, jest */
import {search} from 'react-icons-kit/fa/search';
import Icon from './Icon';
import {renderTest} from '../../utils/testUtils';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Icon', () => {
  renderTest(Icon, {icon: {search}, size: 15});
});