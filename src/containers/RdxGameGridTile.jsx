import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { incAccess } from '../rdxs/games';
import GameGridTile from '../components/GameGridTile';

const mapDispatchToProps = dispatch => ({
  incAccess: (id) => {
    dispatch(incAccess(id));
  },
});

export default withRouter(
  connect(null, mapDispatchToProps)(GameGridTile),
);
