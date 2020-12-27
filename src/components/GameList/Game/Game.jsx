import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameWrapper from './GameWrapper';
import GameImage from './GameImage';
import Recommendation from './Recommendation/Recommendation';
import Platforms from './Platforms/Platforms';
import TagList from './TagList';

import GameObject from '../../../types/Game';

const Game = ({ game, className }) => {
  return (
    <GameWrapper>
      <div className={className}>
        <h2>{game.title}</h2>

        {game.localPlayers !== null && (
          <p>
            Paikallinen moninpeli: {game.localPlayers.min} -{' '}
            {game.localPlayers.max}
          </p>
        )}

        {game.onlinePlayers !== null && (
          <p>
            Verkkomoninpeli: {game.onlinePlayers.min} - {game.onlinePlayers.max}
          </p>
        )}

        <TagList game={game} />

        <Platforms game={game} />

        <GameImage url={game.imageUrl} />

        {Array.isArray(game.recommendations) &&
          game.recommendations.map(rec => (
            <Recommendation author={rec.author} key={rec.author}>
              {rec.content}
            </Recommendation>
          ))}

        <a href={game.url} target="_blank" rel="noopener noreferrer">
          Tutustu tarkemmin
        </a>
      </div>
    </GameWrapper>
  );
};

Game.propTypes = {
  game: PropTypes.instanceOf(GameObject).isRequired,
  className: PropTypes.string,
};

export default styled(Game)`
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  color: #000;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding-bottom: 0.5rem;
  border: 2px solid rgba(255, 220, 150, 0.3);
  height: 100%;
  color: ${({ theme }) => theme.palette.typography.light};
  text-align: left;

  p,
  h2,
  h3,
  h4,
  a,
  span,
  ul {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  p.online,
  p.local {
    margin-top: 0;
    opacity: 0.1;
  }

  p.online.active {
    color: ${({ theme }) => theme.palette.primary.main};
    opacity: 1;
  }

  p.local.active {
    color: ${({ theme }) => theme.palette.tertiary.lighter};
    opacity: 1;
  }

  & > h2 {
    text-align: center;
    font-size: 2em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
  }

  a,
  a:visited,
  a:active,
  a:hover,
  a:focus {
    color: ${({ theme }) => theme.palette.primary.lighter};
  }
`;
