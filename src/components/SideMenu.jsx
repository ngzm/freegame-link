import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CategoryMenuItem from './CategoryMenuItem';
import { CATEGORY_KEY } from '../services/gameCategory';
import './SideMenu.css';

export default () => (
  <div className="MenuPanel">
    <Paper className="paper">
      <CommandMenu />
    </Paper>
    <Paper className="paper">
      <CategoryMenu />
    </Paper>
  </div>
);

export const CommandMenu = () => (
  <List>
    <Subheader>Command</Subheader>
    <ListItem primaryText="New Update" rightIcon={<ActionInfo />} />
    <ListItem primaryText="Stars" rightIcon={<ActionInfo />} />
    <ListItem primaryText="Bookmarks" rightIcon={<ActionInfo />} />
    <ListItem primaryText="Access" rightIcon={<ActionInfo />} />
  </List>
);

export const CategoryMenu = ({ closeDrawer }) => {
  const cfunc = () => { closeDrawer(); };
  return (
    <List>
      <Subheader>Category</Subheader>
      <CategoryMenuItem category={CATEGORY_KEY.action} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.adventure} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.racing} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.shooting} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.battle} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.sports} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.fancy} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.puzzle} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.jewels} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.brain} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.table} closeDrawer={cfunc} />
      <CategoryMenuItem category={CATEGORY_KEY.variety} closeDrawer={cfunc} />
    </List>
  );
};

CategoryMenu.propTypes = { closeDrawer: PropTypes.func };
CategoryMenu.defaultProps = { closeDrawer: () => {} };
