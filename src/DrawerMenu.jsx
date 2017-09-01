import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import CloseIcon from 'material-ui/svg-icons/content/backspace';

import { CategoryMenu, AttentionMenu } from './SideMenu';
import './Header.css';

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
  }

  onClose() {
    this.props.onChange(false);
  }

  menuHeader() {
    return (
      <AppBar
        className="HeaderBar"
        title="MENU"
        iconElementLeft={
          <IconButton onClick={() => { this.onClose(); }}>
            <CloseIcon color="#FFFFFF" />
          </IconButton>
        }
      />
    );
  }

  render() {
    const header = this.menuHeader();
    return (
      <Drawer
        className="MenuDrawer"
        docked={false}
        width={300}
        open={this.props.open}
        onRequestChange={(o) => { this.props.onChange(o); }}
      >
        {header}
        <AttentionMenu />
        <Divider />
        <CategoryMenu />
        <Divider />
        <MenuItem onClick={() => { this.onClose(); }}>Menu Item 1</MenuItem>
        <MenuItem onClick={() => { this.onClose(); }}>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
