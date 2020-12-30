import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Game from '../../../../types/Game';

const translateType = (game, type) => {
  switch (type) {
    case 'AVAILABLE':
      return { title: 'Saatavilla', platforms: game.platforms };
    case 'CROSS_PLAY':
      return { title: 'Cross-play', platforms: game.crossPlayPlatforms };
    case 'GAME_PASS':
      return { title: 'Game Pass', platforms: game.gamePassPlatforms };
    default:
      return '???';
  }
};

/**
 * Displays a list of platforms the game is available on OR can be cross-played with.
 */
const PlatformListStructure = ({ type, game, className }) => {
  const { title, platforms } = translateType(game, type);

  if (!platforms) return null;

  return (
    <div className={className}>
      <h3>{title}</h3>

      <ul>
        {platforms.map(p => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

const PlatformList = styled(PlatformListStructure)`
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

PlatformListStructure.propTypes = {
  type: PropTypes.string.isRequired,
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

export default PlatformList;
