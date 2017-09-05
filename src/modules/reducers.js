import { combineReducers } from 'redux';
import { games } from './games';
import { sortkey } from './sortkey';

export default combineReducers({
  games,
  sortkey,
});
