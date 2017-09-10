import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { CATEGORY_LABEL } from '../services/gameCategory';
import GameGridTile from './GameGridTile';
import AppStyle, { calcGridCols, calcGridWidth } from './AppStyle';
import './Main.css';

const GameGridList = ({ wsize, category, games }) => {
  const cols = calcGridCols(wsize);
  const width = calcGridWidth(cols);
  const cellHeight = AppStyle.MAIN_GRIDTILE_HEIGHT;
  const padding = AppStyle.MAIN_GRIDLIST_PAD;
  const categoryLabel = CATEGORY_LABEL[category];
  const gameTiles = games.map(g => (
    <GameGridTile key={g.id} game={g} />
  ));

  return (
    <GridList style={{ width }} cellHeight={cellHeight} padding={padding} cols={cols}>
      <Subheader>{categoryLabel}</Subheader>
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

/**
 * Redux State to props
 */
const mapStateToProps = state => ({
  wsize: state.vwindow.width,
  category: state.command.category,
  games: state.games,
});

/**
 * Redux connect
 */
export default withRouter(connect(mapStateToProps)(GameGridList));
