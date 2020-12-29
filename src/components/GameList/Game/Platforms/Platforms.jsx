import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import PlatformList from './PlatformList';

import Game from '../../../../types/Game';

const PlatformsStructure = ({ game, className }) => {
  return (
    <div className={className}>
      <PlatformList type="AVAILABLE" game={game} />
      <PlatformList type="CROSS-PLAY" game={game} />
    </div>
  );
};

const Platforms = styled(PlatformsStructure)`
  display: grid;
  grid-template-columns: auto auto;
`;

PlatformsStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

export default Platforms;
