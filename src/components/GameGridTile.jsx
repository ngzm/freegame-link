import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GridTile } from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';
import { incAccess } from '../rdxs/games';
import AppStyle from './AppStyle';
import './Main.css';

class GameGridTile extends Component {
  onTileClick() {
    const id = this.props.game.id;

    // 1) Games databese update
    // Using gameService function
    // ......

    // 2) Redux state increments Access
    // Using Redux container's function
    this.props.incAccess(id);

    // 3) Routing Clicked game contents
    const url = `/${id}`;
    this.props.history.push(url);
  }

  render() {
    const game = this.props.game;
    return (
      <GridTile
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
        actionIcon={
          <IconButton onClick={() => { this.onTileClick(); }}>
            <StarBorder color="white" />
          </IconButton>
        }
      >
        <img src={game.iconUri} alt={game.title} />
      </GridTile>
    );
  }
}

GameGridTile.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
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
  incAccess: PropTypes.func.isRequired,
};

/**
 * Redux Dispatcher to Props func
 */
const mapDispatchToProps = dispatch => ({
  incAccess: (id) => {
    dispatch(incAccess(id));
  },
});

/**
 * Redux connect
 */
export default withRouter(
  connect(null, mapDispatchToProps)(GameGridTile),
);
