import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Main from './Main';

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </MuiThemeProvider>
);

const Footer = () => (
  <div>
    <small>FRENCH CONNECTION</small>
  </div>
);

export default App;
