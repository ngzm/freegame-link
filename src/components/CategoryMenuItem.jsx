import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import { setCategory } from '../rdxs/command';
import { fetchGames } from '../rdxs/games';
import { CATEGORY_LABEL } from '../services/gameCategory';
import './SideMenu.css';

const CATEGORY_ICON = {
  1: <ContentInbox />,
  2: <ActionGrade />,
  3: <ContentSend />,
  4: <ContentDrafts />,
  5: <ContentInbox />,
  6: <ActionGrade />,
  7: <ContentSend />,
  8: <ContentDrafts />,
  9: <ContentInbox />,
  10: <ActionGrade />,
  11: <ContentSend />,
  12: <ContentDrafts />,
};

class CategoryMenuItem extends Component {
  onItemClick() {
    if (!this.props.active) {
      // set game category
      this.props.setCategory();

      // Fetch array of game datas
      this.props.fetchGames();
    }

    // Close Drawer Menu (if Drawer)
    this.props.closeDrawer();

    // Route to Games List
    this.props.history.push('/');
  }

  getStyle() {
    return (this.props.active)
      ? { color: 'yellow', backgroundColor: '#BBBBBB' }
      : {};
  }

  render() {
    const label = CATEGORY_LABEL[this.props.category];
    const icon = CATEGORY_ICON[this.props.category];
    const style = this.getStyle();
    return (
      <ListItem
        style={style}
        primaryText={label}
        leftIcon={icon}
        onClick={() => { this.onItemClick(); }}
      />
    );
  }
}

CategoryMenuItem.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  closeDrawer: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  setCategory: PropTypes.func.isRequired,
  fetchGames: PropTypes.func.isRequired,
};

/**
 * Redux State to Props
 */
const mapStateToProps = (state, ownProps) => ({
  active: (ownProps.category === state.command.category),
});

/**
 * Redux Dispacher to Props func
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  setCategory: () => {
    dispatch(setCategory(ownProps.category));
  },
  fetchGames: () => {
    dispatch(fetchGames(ownProps.category));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoryMenuItem),
);
