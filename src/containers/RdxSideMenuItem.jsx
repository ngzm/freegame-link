import { connect } from 'react-redux';
import { setCategory } from '../modules/category';
import SideMenuItem from '../components/SideMenuItem';

const mapStateToProps = (state, ownProps) => (
  {
    active: (ownProps.category === state.category),
  }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => { dispatch(setCategory(ownProps.category)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenuItem);
