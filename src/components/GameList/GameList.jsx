import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Game from './Game/Game';

/**
 * Displays multiple recommendations in a list.
 */
const GameList = ({ games, className }) => {
  if (games.length < 1) {
    return <h2>No games matching your filters!</h2>;
  }

  return (
    <div className={className}>
      {games.map(game => (
        <Game game={game} key={game.title} />
      ))}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array,
  className: PropTypes.string,
};

export default styled(GameList)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  margin: 0;
  padding: 0.5rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;
