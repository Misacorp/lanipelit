import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Game from '../../../../types/Game';

const translateType = type => {
  switch (type) {
    case 'AVAILABLE':
      return 'Saatavilla';
    case 'CROSS-PLAY':
      return 'Cross-play';
    default:
      return '???';
  }
};

/**
 * Displays a list of platforms the game is available on OR can be cross-played with.
 */
const PlatformListStructure = ({ type, game, className }) => {
  const platforms =
    type === 'AVAILABLE' ? game?.platforms : game?.crossPlayPlatforms;

  if (!platforms) return null;

  return (
    <div className={className}>
      <h3>{translateType(type)}</h3>

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
