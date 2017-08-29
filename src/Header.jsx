import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const HeaderLeftMenu = props => (
  <IconButton onClick={props.onClick}>
    <MenuIcon />
  </IconButton>
);
HeaderLeftMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const HeaderRightMenu = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="About" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign in" />
  </IconMenu>
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
          <MenuItem onClick={() => { this.setDrawer(false); }}>Menu Item 1</MenuItem>
          <MenuItem onClick={() => { this.setDrawer(false); }}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
