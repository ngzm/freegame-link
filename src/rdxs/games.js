import GameService from '../services/gameService';

const SET_GAMES = 'SET_GAMES';
const INC_STAR = 'INC_STAR';
const INC_ACCESS = 'INC_ACCESS';

export const setGames = games => ({
  type: SET_GAMES,
  games,
});

export const incStar = id => ({
  type: INC_STAR,
  id,
});

export const incAccess = id => ({
  type: INC_ACCESS,
  id,
});

export const fetchGames = category => (
  (dispatch) => {
    const success = (res) => {
      console.log('fatchGames SUCCESS!!');
      dispatch(setGames(res.data));
    };
    const fail = (err) => {
      console.log(`ERROR !!!! ${err}`);
    };
    GameService.getGames(category, success, fail);
  }
);

export const games = (state = [], action) => {
  switch (action.type) {
    case SET_GAMES:
      return action.games;

    case INC_STAR:
      return state.map((game) => {
        if (game.id === action.id) {
          const nstar = game.star + 1;
          return Object.assign({}, game, { star: nstar });
        }
        return game;
      });

    case INC_ACCESS:
      return state.map((game) => {
        if (game.id === action.id) {
          const naccess = game.access + 1;
          return Object.assign({}, game, { access: naccess });
        }
        return game;
      });

    default:
      return state;
  }
};
