import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { DialogTrigger } from '@adobe/react-spectrum';

import Game from './Game/Game';
import GameDialog from './GameDialog';

/**
 * Displays multiple recommendations in a list.
 */
const GameList = ({ games, className }) => {
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);

  if (games.length < 1) {
    return <h2>No games matching your filters!</h2>;
  }

  const firstSelected = selectedGameIndex === 0;
  const lastSelected = selectedGameIndex === games.length - 1;

  const prevGame = () => {
    if (!firstSelected) {
      setSelectedGameIndex(selectedGameIndex - 1);
    } else {
      setSelectedGameIndex(games.length - 1);
    }
  };

  const nextGame = () => {
    if (!lastSelected) {
      setSelectedGameIndex(selectedGameIndex + 1);
    } else {
      setSelectedGameIndex(0);
    }
  };

  const selectedGame = games[selectedGameIndex];
  const setSelectedGame = game =>
    setSelectedGameIndex(games.findIndex(g => g.title === game.title));

  return (
    <div className={className}>
      <>
        <DialogTrigger isDismissable>
          {games.map(game => (
            <Game
              game={game}
              setSelectedGame={setSelectedGame}
              key={game.title}
            />
          ))}

          {close =>
            selectedGame && (
              <GameDialog
                game={selectedGame}
                prevGame={prevGame}
                nextGame={nextGame}
                index={selectedGameIndex}
                max={games.length}
                close={close}
              />
            )
          }
        </DialogTrigger>
      </>
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
