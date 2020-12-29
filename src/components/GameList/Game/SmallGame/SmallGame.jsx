import React from 'react';
import styled, { useTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';

import GameWrapper from '../GameWrapper';
import { ReactComponent as LocalIcon } from '../../../../assets/icons/videogame_asset-24px.svg';
import { ReactComponent as OnlineIcon } from '../../../../assets/icons/public-24px.svg';

import Game from '../../../../types/Game';

const SmallGameStructure = ({ game, className }) => {
  const theme = useTheme();
  const iconColor = theme.palette.typography.light;

  return (
    <GameWrapper className={className}>
      <h2>{game.title}</h2>

      <p>{game.tags.join(', ')}</p>

      <p>
        <span>
          <LocalIcon fill={iconColor} /> {game.localPlayers.toString()}
        </span>

        <span>
          <OnlineIcon fill={iconColor} />
          {game.onlinePlayers.toString()}
        </span>
      </p>

      <p>Saatavilla: {game.platforms.join(', ')}</p>

      {game.crossPlayPlatforms?.length > 0 && (
        <p>Cross-play: {game.crossPlayPlatforms.join(', ')}</p>
      )}

      {game.gamePassPlatforms?.length > 0 && (
        <p>Game Passissa: {game.gamePassPlatforms.join(', ')}</p>
      )}
    </GameWrapper>
  );
};

SmallGameStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

const SmallGame = styled(SmallGameStructure)``;

export default SmallGame;
