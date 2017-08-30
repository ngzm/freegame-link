import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Main from './Main';
import './App.css';

const BaseFramePC = () => (
  <div className="basepanel">
    <Header />
    <div className="pc">
      <div className="menu">
        menu
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
    <Header />
    <Main />
    <Footer />
  </div>
);

const Footer = () => (
  <div className="footer">
    <small>FRENCH CONNECTION</small>
  </div>
);

const MOBILE_SIZE = 800;
const getWinSize = () => window.innerWidth;

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

export default App;
