import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Main from './Main';
import SideMenu from './SideMenu';
import Footer from './Footer';
import AppStyle, { getWinSize } from './AppStyle';
import './App.css';

const BaseFramePC = ({ wsize }) => (
  <div className="basepanel">
    <Header />
    <div className="pc">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="main">
        <Main wsize={wsize} />
      </div>
    </div>
    <Footer />
  </div>
);
BaseFramePC.propTypes = { wsize: PropTypes.number.isRequired };

const BaseFrameMobile = ({ wsize }) => (
  <div className="basepanel">
    <HeaderMobile />
    <Main wsize={wsize} />
    <Footer />
  </div>
);
BaseFrameMobile.propTypes = { wsize: PropTypes.number.isRequired };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { winWidth: getWinSize() };
  }

  componentWillMount() {
    this.resizeHandler = () => { this.setWinSize(); };
    this.setWinSize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  setWinSize() {
    this.setState({ winWidth: getWinSize() });
  }

  isMobile() {
    return (this.state.winWidth < AppStyle.MINIMUM_PC_WIDTH);
  }

  componentWillUmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render() {
    const BaseFrame = (this.isMobile()) ? BaseFrameMobile : BaseFramePC;

    return (
      <MuiThemeProvider>
        <BaseFrame wsize={this.state.winWidth} />
      </MuiThemeProvider>
    );
  }
}
