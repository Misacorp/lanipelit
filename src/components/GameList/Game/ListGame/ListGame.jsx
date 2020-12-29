import React from 'react';
import styled, { useTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';

import { ReactComponent as LocalIcon } from '../../../../assets/icons/videogame_asset-24px.svg';
import { ReactComponent as OnlineIcon } from '../../../../assets/icons/public-24px.svg';

import Game from '../../../../types/Game';

const ListGameStructure = ({ game, className }) => {
  const theme = useTheme();
  const iconColor = theme.palette.typography.dark;

  return (
    <div className={className}>
      <h2>{game.title}</h2>

      <p>{game.tags.join(', ')}</p>

      <p>
        <LocalIcon fill={iconColor} /> {game.localPlayers.toString()}
      </p>

      <p>
        <OnlineIcon fill={iconColor} />
        {game.onlinePlayers.toString()}
      </p>
    </div>
  );
};

ListGameStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

const ListGame = styled(ListGameStructure)`
  color: ${({ theme }) => theme.palette.typography.dark};
  flex-basis: 100%;
  display: grid;
  align-items: center;
  text-align: left;
  grid-template-columns: 3fr 2fr 1fr 1fr;
  background-color: ${({ theme }) => theme.palette.primary.lightest};
  margin-bottom: 2px;
  padding: 0.5rem 1rem;

  border-style: solid;
  border-right-width: 7px;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-color: #ffc600;

  & > p {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  & > p,
  & > h2 {
    margin: 0 0.5rem 0 0;
  }
`;

export default ListGame;
