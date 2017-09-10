import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getYPos, setYPos } from './AppStyle';

class GameContent extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: 0 };
  }

  componentWillMount() {
    console.log('GameContent: willMount in');
    console.log(`getYPos: ${getYPos()}`);
    this.setState({ scrollTop: getYPos() });
    setYPos(0);
  }

  componentWillUnmount() {
    console.log('GameContent: willUnMount in');
    console.log(`state.scrollTop: ${this.state.scrollTop}`);
    setYPos(this.state.scrollTop);
  }

  render() {
    return (
      <section className="GameContext">
        <h2>Game Content</h2>
        id = {this.props.game.id}

        <div>
          <img src={this.props.game.iconUri} alt={this.props.game.title} />
        </div>

        <div>
          <Link to="/">Main</Link>
        </div>
      </section>
    );
  }
}

GameContent.propTypes = {
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

/**
 * Redux State to props
 */
const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);
  let game;
  for (let i = 0; i < state.games.length; i += 1) {
    if (state.games[i].id === id) {
      game = state.games[i];
      break;
    }
  }
  return { game };
};

/**
 * Redux connect
 */
export default withRouter(connect(mapStateToProps)(GameContent));
