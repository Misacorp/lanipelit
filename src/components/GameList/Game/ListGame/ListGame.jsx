import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import PlayerCounts from '../PlayerCounts';

import Game from '../../../../types/Game';

const ListGameStructure = ({ game, className }) => {
  return (
    <div className={className}>
      <h2>{game.title}</h2>

      <p>{game.tags.join(', ')}</p>

      <PlayerCounts game={game} />
    </div>
  );
};

ListGameStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

const ListGame = styled(ListGameStructure)`
  color: ${({ theme }) => theme.palette.typography.dark};
  background-color: ${({ theme }) => theme.palette.primary.lightest};
  padding: 0.5rem 1rem;
  flex-basis: 100%;
  display: grid;
  align-items: center;
  text-align: left;
  grid-template-columns: 3fr 3fr 2fr;
  margin-bottom: 2px;

  border-style: solid;
  border-right-width: 7px;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-color: #ffc600;

  & > p,
  & > h2 {
    margin: 0 0.5rem 0 0;
  }
`;

export default ListGame;
