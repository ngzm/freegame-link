import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import { CATEGORY_KEY, getCategoryLabel } from '../rdxs/category';
import './SideMenu.css';

class CategoryMenuItem extends Component {
  onItemClick() {
    this.props.onClickRdx();
    this.props.history.push('/');
  }

  getItem() {
    let label = getCategoryLabel(this.props.category);
    let icon;
    switch (this.props.category) {
      case CATEGORY_KEY.action:
        icon = <ContentInbox />;
        break;

      case CATEGORY_KEY.adventure:
        icon = <ActionGrade />;
        break;

      case CATEGORY_KEY.racing:
        icon = <ContentSend />;
        break;

      case CATEGORY_KEY.shooting:
        icon = <ContentDrafts />;
        break;

      case CATEGORY_KEY.battle:
        icon = <ContentInbox />;
        break;

      case CATEGORY_KEY.sports:
        icon = <ActionGrade />;
        break;

      case CATEGORY_KEY.fancy:
        icon = <ContentSend />;
        break;

      case CATEGORY_KEY.puzzle:
        icon = <ContentDrafts />;
        break;

      case CATEGORY_KEY.jewells:
        icon = <ContentInbox />;
        break;

      case CATEGORY_KEY.brain:
        icon = <ActionGrade />;
        break;

      case CATEGORY_KEY.table:
        icon = <ContentSend />;
        break;

      case CATEGORY_KEY.variety:
        icon = <ContentDrafts />;
        break;

      default:
        label = 'Action';
        icon = <ContentInbox />;
        break;
    }
    return [label, icon];
  }

  getStyle() {
    return (this.props.active)
      ? { color: 'yellow', backgroundColor: '#BBBBBB' }
      : {};
  }

  render() {
    const [label, icon] = this.getItem();
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  onClickRdx: PropTypes.func.isRequired,
};

export default withRouter(CategoryMenuItem);
