import React from 'react';
import PropTypes from 'prop-types';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import RdxGameGridTile from '../containers/RdxGameGridTile';
import AppStyle, { calcGridCols, calcGridWidth } from './AppStyle';
import './Main.css';

const GameGridList = ({ wsize, category, games }) => {
  const cols = calcGridCols(wsize);
  const width = calcGridWidth(cols);
  const cellHeight = AppStyle.MAIN_GRIDTILE_HEIGHT;
  const padding = AppStyle.MAIN_GRIDLIST_PAD;
  const gameTiles = games.map(g => (
    <RdxGameGridTile key={g.id} game={g} />
  ));

  console.log(`cols = ${cols}`);
  console.log(`width = ${width}`);

  return (
    <GridList style={{ width }} cellHeight={cellHeight} padding={padding} cols={cols}>
      <Subheader>{category}</Subheader>
      {gameTiles}
    </GridList>
  );
};

GameGridList.propTypes = {
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

export default GameGridList;
