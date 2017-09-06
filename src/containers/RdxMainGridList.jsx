import { connect } from 'react-redux';
import { setGames } from '../modules/games';
import MainGridList from '../components/MainGridList';

const mapStateToProps = state => ({
  category: state.category,
  games: state.games, // 本当はここでソートする
});

const mapDispatchToProps = dispatch => ({
  setGames: (games) => {
    dispatch(setGames(games));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainGridList);
