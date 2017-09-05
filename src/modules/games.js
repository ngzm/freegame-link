const SET_GAMES = 'SET_GAMES';
const SET_CATEGORY = 'SET_CATEGORY';

export const CATEGORY_KEY = {
  action: 1,
  adventure: 2,
  racing: 3,
  shooting: 4,
  battle: 5,
  sports: 6,
  fancy: 7,
  puzzle: 8,
  jewels: 9,
  brain: 10,
  table: 11,
  variety: 12,
};

export const setGames = games => ({
  type: SET_GAMES,
  games,
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  category,
});

export const games = (state = [], action) => {
  switch (action.type) {
    case SET_GAMES:
      return action.games;

    case SET_CATEGORY:
      return action.category;

    default:
      return state;
  }
};
