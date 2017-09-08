import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RdxMainGridList from '../containers/RdxMainGridList';
import GameService from '../services/gameService';
import './Main.css';

export default class GamesList extends Component {
  componentWillMount() {
    this.getGameList(this.props.category);
  }

  componentWillReceiveProps(nextProps) {
    console.log('willReceiveProps in');
    if (this.props.category !== nextProps.category) {
      this.getGameList(nextProps.category);
    }
  }

  getGameList(category) {
    GameService.getGames(category,
      (res) => { this.props.setGames(res.data); },
      (err) => { console.log(`Error!! ${err}`); },
    );
  }

  render() {
    return (
      <div className="Container">
        <RdxMainGridList
          wsize={this.props.wsize}
          category={this.props.category}
          games={this.props.games}
        />
      </div>
    );
  }
}

GamesList.propTypes = {
  wsize: PropTypes.number.isRequired,
  category: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    category1: PropTypes.number.isRequired,
    category2: PropTypes.number.isRequired,
    category3: PropTypes.number.isRequired,
    iconUri: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    access: PropTypes.number.isRequired,
  })).isRequired,
  setGames: PropTypes.func.isRequired,
};
