import MediaCard from './MediaCard';
import {renderTest} from '../../utils/testUtils';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('MediaCard', () => {
  renderTest(MediaCard, {name: 'imma name', imgExt: 'immanext'});
});
