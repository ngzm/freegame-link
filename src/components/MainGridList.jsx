import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import MainGridTile from './MainGridTile';
import AppStyle from './AppStyle';
import './Main.css';

export default class MainGridList extends Component {
  static calcGridCols(winSize) {
    const mainSize = (winSize > AppStyle.MINIMUM_PC_WIDTH)
      ? (winSize - 320) - 120
      : winSize - 120;
    return Math.floor(mainSize / AppStyle.MAIN_GRIDTILE_WIDTH);
  }

  static calcGridWidth(cols) {
    return (cols * (AppStyle.MAIN_GRIDTILE_WIDTH + AppStyle.MAIN_GRIDLIST_PAD)) + 18;
  }

  render() {
    const [category, games] = [this.props.category, this.props.games];
    const cols = MainGridList.calcGridCols(this.props.wsize);
    const width = MainGridList.calcGridWidth(cols);
    const cellHeight = AppStyle.MAIN_GRIDTILE_HEIGHT;
    const padding = AppStyle.MAIN_GRIDLIST_PAD;
    const gameTiles = games.map(g => <MainGridTile key={g.id} game={g} />);

    console.log(`cols = ${cols}`);
    console.log(`width = ${width}`);

    return (
      <GridList style={{ width }} cellHeight={cellHeight} padding={padding} cols={cols}>
        <Subheader>{category}</Subheader>
        {gameTiles}
      </GridList>
    );
  }
}

MainGridList.propTypes = {
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
};
