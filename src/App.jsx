import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Main from './Main';
import SideMenu from './SideMenu';
import './App.css';

const MOBILE_SIZE = 1280;
const getWinSize = () => window.innerWidth;

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { winWidth: getWinSize() };
  }

  componentWillMount() {
    this.resizeHandler = () => { this.setWinSize(); };
    this.setWinSize();
  }

  componentDidMount() {
    // window.addEventListener('resize', () => { this.setWinSize(); });
    window.addEventListener('resize', this.resizeHandler);
  }

  setWinSize() {
    const wsize = getWinSize();
    console.log(`innerWidth : ${wsize}`);
    this.setState({ winWidth: wsize });
  }

  isMobile() {
    return (this.state.winWidth < MOBILE_SIZE);
  }

  componentWillUmount() {
    // window.removeEventListener('resize', () => { this.setWinSize(); });
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

const Footer = () => (
  <div className="footer">
    <small>FRENCH CONNECTION</small>
  </div>
);

export default App;
