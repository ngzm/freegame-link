import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import RdxSideMenuItem from '../containers/RdxSideMenuItem';
import { CATEGORY_KEY } from '../modules/category';
import './SideMenu.css';

export default () => (
  <div className="MenuPanel">
    <Paper className="paper">
      <AttentionMenu />
    </Paper>
    <Paper className="paper">
      <CategoryMenu />
    </Paper>
  </div>
);

export const AttentionMenu = () => (
  <List>
    <Subheader>Attention</Subheader>
    <ListItem primaryText="New Update" rightIcon={<ActionInfo />} />
    <ListItem primaryText="Stars" rightIcon={<ActionInfo />} />
    <ListItem primaryText="Bookmarks" rightIcon={<ActionInfo />} />
    <ListItem primaryText="Access" rightIcon={<ActionInfo />} />
  </List>
);

export const CategoryMenu = () => (
  <List>
    <Subheader>Category</Subheader>
    <RdxSideMenuItem category={CATEGORY_KEY.action} />
    <RdxSideMenuItem category={CATEGORY_KEY.adventure} />
    <RdxSideMenuItem category={CATEGORY_KEY.racing} />
    <RdxSideMenuItem category={CATEGORY_KEY.shooting} />
    <RdxSideMenuItem category={CATEGORY_KEY.battle} />
    <RdxSideMenuItem category={CATEGORY_KEY.sports} />
    <RdxSideMenuItem category={CATEGORY_KEY.fancy} />
    <RdxSideMenuItem category={CATEGORY_KEY.puzzle} />
    <RdxSideMenuItem category={CATEGORY_KEY.jewels} />
    <RdxSideMenuItem category={CATEGORY_KEY.brain} />
    <RdxSideMenuItem category={CATEGORY_KEY.table} />
    <RdxSideMenuItem category={CATEGORY_KEY.variety} />
  </List>
);
