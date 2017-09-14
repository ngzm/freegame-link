import { CATEGORY_KEY, COMMAND_KEY } from '../services/gameCategory';

const SET_CATEGORY = 'SET_CATEGORY';
const SET_COMMAND = 'SET_COMMAND';

export const setCategory = category => ({
  type: SET_CATEGORY,
  category,
});

export const setCommand = command => ({
  type: SET_COMMAND,
  command,
});

const initState = {
  category: CATEGORY_KEY.action,
  command: COMMAND_KEY.update,
};

export const command = (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return Object.assign({}, state, { category: action.category });

    case SET_COMMAND:
      return Object.assign({}, state, { command: action.command });

    default:
      return state;
  }
};
