import { connect } from 'react-redux';
import { incAccess } from '../rdxs/games';
import GameGridTile from '../components/GameGridTile';

const mapDispatchToProps = dispatch => ({
  incAccess: (id) => {
    dispatch(incAccess(id));
  },
});

export default connect(null, mapDispatchToProps)(GameGridTile);
