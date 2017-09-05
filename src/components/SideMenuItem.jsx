import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import { CATEGORY_KEY } from '../modules/category';
import './SideMenu.css';

const SideMenuItem = (props) => {
  const style = (props.active)
    ? { color: 'yellow', backgroundColor: '#BBBBBB' }
    : {};

  let primaryText;
  let leftIcon;
  switch (props.category) {
    case CATEGORY_KEY.action:
      primaryText = 'Action';
      leftIcon = <ContentInbox />;
      break;

    case CATEGORY_KEY.adventure:
      primaryText = 'Adventure';
      leftIcon = <ActionGrade />;
      break;

    case CATEGORY_KEY.racing:
      primaryText = 'Racing';
      leftIcon = <ContentSend />;
      break;

    case CATEGORY_KEY.shooting:
      primaryText = 'Shooting';
      leftIcon = <ContentDrafts />;
      break;

    case CATEGORY_KEY.battle:
      primaryText = 'Battle';
      leftIcon = <ContentInbox />;
      break;

    case CATEGORY_KEY.sports:
      primaryText = 'Sports';
      leftIcon = <ActionGrade />;
      break;

    case CATEGORY_KEY.fancy:
      primaryText = 'Fancy';
      leftIcon = <ContentSend />;
      break;

    case CATEGORY_KEY.puzzle:
      primaryText = 'Puzzle';
      leftIcon = <ContentDrafts />;
      break;

    case CATEGORY_KEY.jewells:
      primaryText = 'Jewells';
      leftIcon = <ContentInbox />;
      break;

    case CATEGORY_KEY.brain:
      primaryText = 'Brain';
      leftIcon = <ActionGrade />;
      break;

    case CATEGORY_KEY.table:
      primaryText = 'Table';
      leftIcon = <ContentSend />;
      break;

    case CATEGORY_KEY.variety:
      primaryText = 'Variety';
      leftIcon = <ContentDrafts />;
      break;

    default:
      primaryText = 'Action';
      leftIcon = <ContentInbox />;
      break;
  }

  return (
    <ListItem
      style={style}
      primaryText={primaryText}
      leftIcon={leftIcon}
      onClick={() => { props.onClick(); }}
    />
  );
};

SideMenuItem.propTypes = {
  active: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SideMenuItem;
