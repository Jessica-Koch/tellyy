import MediaCard from './MediaCard';
import {renderTest} from '../../utils/testUtils';

describe('MediaCard', () => {
  renderTest(MediaCard, {name: 'imma name', imgExt: 'immanext'});
});
