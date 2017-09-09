import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class GameContent extends Component {
  componentWillMount() {
    console.log('GameContent: willMount in');
    window.scrollTo(0, 0);
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);
    return (
      <section className="GameContext">
        <h2>Game Content</h2>
        id = {id}

        <div>
          {/* <a href="" onClick={() => { window.history.back(); }}>Go Back</a> */}
          <Link to="/">Main</Link>
        </div>
      </section>
    );
  }
}

GameContent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
