import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import SideMenuMobile from './SideMenuMobile';
import { HeaderRightMenu } from './Header';
import './Header.css';

export default class HeaderMobile extends Component {
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
          iconElementLeft={<HeaderLeftMenuMobile onClick={() => { this.toggleDrawer(); }} />}
          iconElementRight={<HeaderRightMenu />}
        />
        <SideMenuMobile open={this.state.open} onChange={(o) => { this.setDrawer(o); }} />
      </div>
    );
  }
}

const HeaderLeftMenuMobile = props => (
  <IconButton onClick={props.onClick}>
    <MenuIcon color="#FFFFFF" />
  </IconButton>
);
HeaderLeftMenuMobile.propTypes = { onClick: PropTypes.func.isRequired };

