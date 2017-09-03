import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import './Header.css';

export default () => (
  <AppBar
    className="HeaderBar"
    title="MATERIAL UI TEST"
    iconElementLeft={<HeaderLeftMenu />}
    iconElementRight={<HeaderRightMenu />}
  />
);

export const HeaderLeftMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon color="#FFFFFF" /></IconButton>
    }
    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
  >
    <MenuItem primaryText="About" />
    <MenuItem primaryText="Help" />
  </IconMenu>
);

export const HeaderRightMenu = () => (
  <div>
    <Avatar
      color="#FFFFFF"
      backgroundColor="#3399CC"
    >
      A
    </Avatar>
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon color="#FFFFFF" /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText="About" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign in" />
    </IconMenu>
  </div>
);
