import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import MainGridTile from './MainGridTile';
import AppStyle, { calcGridCols, calcGridWidth } from './AppStyle';
import './Main.css';

export default class MainGridList extends Component {
  onTileClick(id) {
    // 1) Games databese update
    // Using gameService function
    // ......

    // 2) Redux state increments Access
    // Using Redux container's function
    this.props.incAccess(id);

    // 3) Routing Clicked game contents
    // ....
    // ....
  }

  render() {
    const [wsize, category, games] = [this.props.wsize, this.props.category, this.props.games];
    const cols = calcGridCols(wsize);
    const width = calcGridWidth(cols);
    const cellHeight = AppStyle.MAIN_GRIDTILE_HEIGHT;
    const padding = AppStyle.MAIN_GRIDLIST_PAD;
    const gameTiles = games.map(g => (
      <MainGridTile
        key={g.id}
        game={g}
        incAccess={() => { this.onTileClick(g.id); }}
      />
    ));

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
  incAccess: PropTypes.func.isRequired,
};
