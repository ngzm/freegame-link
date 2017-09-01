import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
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
    <ListItem primaryText="Action" leftIcon={<ContentInbox />} />
    <ListItem primaryText="Adventure" leftIcon={<ActionGrade />} />
    <ListItem primaryText="Racing" leftIcon={<ContentSend />} />
    <ListItem primaryText="Shooting" leftIcon={<ContentSend />} />
    <ListItem primaryText="Battle" leftIcon={<ContentDrafts />} />
    <ListItem primaryText="Sports" leftIcon={<ContentDrafts />} />
    <ListItem primaryText="Fancy" leftIcon={<ContentInbox />} />
    <ListItem primaryText="Puzzle" leftIcon={<ContentDrafts />} />
    <ListItem primaryText="Jewells" leftIcon={<ContentDrafts />} />
    <ListItem primaryText="Brain" leftIcon={<ContentInbox />} />
    <ListItem primaryText="Table" leftIcon={<ContentInbox />} />
    <ListItem primaryText="Variety" leftIcon={<ContentInbox />} />
  </List>
);
