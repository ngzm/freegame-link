const SET_GAMES = 'SET_GAMES';
export const setGames = games => ({
  type: SET_GAMES,
  games,
});

export const games = (state = [], action) => {
  switch (action.type) {
    case SET_GAMES:
      return action.games;

    default:
      return state;
  }
};
