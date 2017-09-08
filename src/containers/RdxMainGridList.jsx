import { connect } from 'react-redux';
import { incAccess } from '../rdxs/games';
import MainGridList from '../components/MainGridList';

const mapDispatchToProps = dispatch => ({
  incAccess: (id) => {
    dispatch(incAccess(id));
  },
});

export default connect(null, mapDispatchToProps)(MainGridList);
