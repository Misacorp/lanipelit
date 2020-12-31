import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import GameWrapper from '../GameWrapper';
import PlayerCounts from '../PlayerCounts';

import Game from '../../../../types/Game';
import GameImage from '../GameImage';

const SmallGameStructure = ({ game, className }) => {
  return (
    <GameWrapper>
      <div className={className}>
        <h2>{game.title}</h2>

        <GameImage url={game.imageUrl} />

        <p>{game.tags.join(', ')}</p>

        <PlayerCounts game={game} />

        <p>
          <b>Saatavilla</b>: {game.platforms.join(', ')}
        </p>

        {game.crossPlayPlatforms?.length > 0 && (
          <p>
            <b>Cross-play</b>: {game.crossPlayPlatforms.join(', ')}
          </p>
        )}

        {game.gamePassPlatforms?.length > 0 && (
          <p>
            <b>Game Passissa</b>: {game.gamePassPlatforms.join(', ')}
          </p>
        )}
      </div>
    </GameWrapper>
  );
};

SmallGameStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

const SmallGame = styled(SmallGameStructure)`
  color: ${({ theme }) => theme.palette.typography.dark};
  background-color: ${({ theme }) => theme.palette.primary.lightest};

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  height: 100%;

  border-style: solid;
  border-right-width: 7px;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-color: #ffc600;

  ${PlayerCounts} {
    margin-left: auto;
    margin-right: auto;
    max-width: 180px;
  }
`;

export default SmallGame;
