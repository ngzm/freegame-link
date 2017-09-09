import { connect } from 'react-redux';
import { setGames } from '../rdxs/games';
import GamesList from '../components/GamesList';

const mapStateToProps = state => ({
  category: state.category,
  games: state.games,
});

const mapDispatchToProps = dispatch => ({
  setGames: (games) => {
    dispatch(setGames(games));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
