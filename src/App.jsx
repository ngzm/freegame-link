import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Main from './Main';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <BaseFrame />
  </MuiThemeProvider>
);


const BaseFramePC= () => (
  <div className="basepanel pc">
    <div className="menu">
      menu
    </div>
    <div className="main">>
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

const BaseFrameMobile= () => (
  <div className="basepanel mobile">>
    <Header />
    <Main />
    <Footer />
  </div>
);

const BaseFrame = BaseFramePC;

const Footer = () => (
  <div className="footer">
    <small>FRENCH CONNECTION</small>
  </div>
);

export default App;
