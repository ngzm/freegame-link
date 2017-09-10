import { combineReducers } from 'redux';
import { games } from './games';
import { command } from './command';
import { vwindow } from './vwindow';

export default combineReducers({
  games,
  command,
  vwindow,
});
