import React from 'react';
import styled, { useTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';

import { ReactComponent as LocalIcon } from '../../../assets/icons/videogame_asset-24px.svg';
import { ReactComponent as OnlineIcon } from '../../../assets/icons/public-24px.svg';
import Game from '../../../types/Game';

/**
 * Displays player counts
 * @param game
 * @param long
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const PlayerCountsStructure = ({ game, long, className }) => {
  const theme = useTheme();
  const iconColor = theme.palette.typography.dark;

  return (
    <div className={className}>
      <div>
        <LocalIcon fill={iconColor} /> {game.localPlayers.toString()}
        {long && <p>Paikalliset pelaajat</p>}
      </div>

      <div>
        <OnlineIcon fill={iconColor} />
        {game.onlinePlayers.toString()}
        {long && <p>Verkkopelaajat</p>}
      </div>
    </div>
  );
};

PlayerCountsStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  long: PropTypes.bool,
  className: PropTypes.string,
};

const PlayerCounts = styled(PlayerCountsStructure)`
  display: flex;
  justify-content: space-between;

  & > div {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.palette.typography.dark};

    p {
      flex-basis: 100%;
      margin: 0;
    }

    svg {
      margin-right: 0.5rem;
    }

    :first-of-type {
      margin-right: 1rem;
    }
  }
`;

export default PlayerCounts;
