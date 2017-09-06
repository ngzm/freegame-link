import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';
import AppStyle from './AppStyle';
import './Main.css';

const MainGridTile = ({ game }) => (
  <GridTile
    key={game.id}
    title={game.title}
    style={{ width: AppStyle.MAIN_GRIDTILE_WIDTH }}
    subtitle={
      <div>
        <StarBorder style={{ width: 10, height: 10 }} color="white" />
        <StarBorder style={{ width: 10, height: 10 }} color="white" />
        <Star style={{ width: 10, height: 10 }} color="yellow" />
        <Star style={{ width: 10, height: 10 }} color="yellow" />
        <Star style={{ width: 10, height: 10 }} color="yellow" />
        /
        {game.access}
      </div>
    }
    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
  >
    <img src={game.iconUri} alt={game.title} />
  </GridTile>
);

MainGridTile.propTypes = {
  game: PropTypes.shape({
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
  }).isRequired,
};

export default MainGridTile;
