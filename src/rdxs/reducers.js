import { combineReducers } from 'redux';
import { games } from './games';
import { category } from './category';
import { sortkey } from './sortkey';

export default combineReducers({
  games,
  category,
  sortkey,
});
