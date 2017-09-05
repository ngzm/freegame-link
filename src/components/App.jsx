import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Main from './Main';
import SideMenu from './SideMenu';
import Footer from './Footer';
import AppStyle, { getWinSize } from './AppStyle';
import './App.css';

const BaseFramePC = () => (
  <div className="basepanel">
    <Header />
    <div className="pc">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
    <Footer />
  </div>
);

const BaseFrameMobile = () => (
  <div className="basepanel">
    <HeaderMobile />
    <Main />
    <Footer />
  </div>
);

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
        <BaseFrame />
      </MuiThemeProvider>
    );
  }
}
