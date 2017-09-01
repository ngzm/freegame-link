import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerMenu from './DrawerMenu';
import { HeaderLeftMenu, HeaderRightMenu, HeaderLeftMenuForMobile } from './HeaderMenu';
import './Header.css';

export default () => (
  <AppBar
    className="HeaderBar"
    title="MATERIAL UI TEST"
    iconElementLeft={<HeaderLeftMenu />}
    iconElementRight={<HeaderRightMenu />}
  />
);

export class HeaderForMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setDrawer(open) {
    this.setState({ open });
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          className="HeaderBar"
          title="MATERIAL UI TEST"
          iconElementLeft={<HeaderLeftMenuForMobile onClick={() => { this.toggleDrawer(); }} />}
          iconElementRight={<HeaderRightMenu />}
        />
        <DrawerMenu open={this.state.open} onChange={(o) => { this.setDrawer(o); }} />
      </div>
    );
  }
}
