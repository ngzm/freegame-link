import { connect } from 'react-redux';
import { setCategory } from '../rdxs/category';
import CategoryMenuItem from '../components/CategoryMenuItem';

const mapStateToProps = (state, ownProps) => ({
  active: (ownProps.category === state.category),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickRdx: () => {
    dispatch(setCategory(ownProps.category));
    ownProps.onClick();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryMenuItem);
