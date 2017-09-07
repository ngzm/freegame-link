import React, { Components } from 'react';
import PropTypes from 'prop-types';

import MainGridList from './MainGridList';
import GameService from '../services/gameService';
import './Main.css';

export default class GamesList extends Components {
  getGameList(category) {
    GameService.getGames(
      category,
      (res) => { this.props.setGames(res.data); },
      (err) => { console.log(`Error!! ${err}`); },
    );
  }

  componentWillMount() {
    this.getGameList(this.props.param.category);
  }

  componentWillRecieveProps(nextProps) {
    this.getGameList(nextProps.category);
  }

  render() {
    return (
      <div className="Container">
        <MainGridList
          category={this.props.param.category}
          games={this.props.param.games}
        />
      </div>
    );
  }
}

GamesList.propTypes = {
  param: PropTypes.shape({
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
  }).isRequired,
  setGames: PropTypes.func.isRequired,
};
