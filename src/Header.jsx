import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';
import { CategoryMenu, AttentionMenu } from './Menu';
import './Header.css';

const DrawerHeaderMenu = props => (
  <IconButton onClick={props.onClick}>
    <CloseIcon color="#FFFFFF" />
  </IconButton>
);
DrawerHeaderMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const HeaderLeftMenu = props => (
  <IconButton onClick={props.onClick}>
    <MenuIcon color="#FFFFFF" />
  </IconButton>
);
HeaderLeftMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const HeaderRightMenu = (props) => (
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  setDrawer(open) {
    this.setState({ drawerOpen: open });
  }

  toggleDrawer() {
    const nopen = !this.state.drawerOpen;
    this.setState({ drawerOpen: nopen });
  }

  render() {
    return (
      <div>
        <AppBar
          className="HeaderBar"
          title="MATERIAL UI TEST"
          iconElementLeft={<HeaderLeftMenu onClick={() => { this.toggleDrawer(); }} />}
          iconElementRight={<HeaderRightMenu />}
        />

        <Drawer
          docked={false}
          width={300}
          open={this.state.drawerOpen}
          onRequestChange={(o) => { this.setDrawer(o); }}
        >
          <AppBar
            className="HeaderBar"
            title="MENU"
            showMenuIconButton={false}
            iconElementRight={<DrawerHeaderMenu onClick={() => { this.setDrawer(false); }} />}
          />
          <AttentionMenu />
          <Divider />
          <CategoryMenu />
          <Divider />
          <MenuItem onClick={() => { this.setDrawer(false); }}>Menu Item 1</MenuItem>
          <MenuItem onClick={() => { this.setDrawer(false); }}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
