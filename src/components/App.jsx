import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Main from './Main';
import SideMenu from './SideMenu';
import Footer from './Footer';
import AppStyle, { getWinSize } from './AppStyle';
import { fetchGames } from '../rdxs/games';
import { setWinWidth } from '../rdxs/vwindow';
import { CATEGORY_KEY } from '../services/gameCategory'; 
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

class App extends Component {
  componentWillMount() {
    this.resizeHandler = () => { this.setWinSize(); };
    this.setWinSize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
    this.props.fetchGames();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  setWinSize() {
    this.props.onChangeWidth(getWinSize());
  }

  isMobile() {
    return (this.props.width < AppStyle.MINIMUM_PC_WIDTH);
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

App.propTypes = {
  width: PropTypes.number.isRequired,
  onChangeWidth: PropTypes.func.isRequired,
  fetchGames: PropTypes.func.isRequired,
};

/**
 * Redux State to Props
 */
const mapStateToProps = state => ({
  width: state.vwindow.width,
});

/**
 * Redux Dispacher to Props func
 */
const mapDispatchToProps = dispatch => ({
  onChangeWidth: (width) => {
    dispatch(setWinWidth(width));
  },
  fetchGames: () => {
    dispatch(fetchGames(CATEGORY_KEY.action));
  },
});

/**
 * Redux connect
 */
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
