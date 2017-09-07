import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import RdxCategoryMenuItem from '../containers/RdxCategoryMenuItem';
import { CATEGORY_KEY } from '../rdxs/category';
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

export const CategoryMenu = ({ onClick }) => {
  const cfunc = () => { onClick(); };
  return (
    <List>
      <Subheader>Category</Subheader>
      <RdxCategoryMenuItem category={CATEGORY_KEY.action} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.adventure} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.racing} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.shooting} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.battle} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.sports} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.fancy} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.puzzle} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.jewels} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.brain} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.table} onClick={cfunc} />
      <RdxCategoryMenuItem category={CATEGORY_KEY.variety} onClick={cfunc} />
    </List>
  );
};

CategoryMenu.propTypes = { onClick: PropTypes.func };
CategoryMenu.defaultProps = { onClick: () => {} };
