import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameWrapper from './GameWrapper';
import GameImage from './GameImage';
import Recommendation from './Recommendation/Recommendation';
import Platforms from './Platforms/Platforms';
import TagList from './TagList';
import SmallGame from './SmallGame/SmallGame';

import GameObject from '../../../types/Game';
import useStore from '../../../store/useStore';
import * as gameListViewModes from '../../../constants/gameListViewModes';

const Game = ({ game, className }) => {
  const { gameListView } = useStore();

  if (gameListView === gameListViewModes.SMALL) {
    return <SmallGame game={game} />;
  }

  return (
    <GameWrapper>
      <div className={className}>
        <h2>{game.title}</h2>

        <p>{game.description}</p>

        <hr />

        {game.localPlayers !== null && (
          <p>Paikallinen moninpeli: {game.localPlayers.toString()}</p>
        )}

        {game.onlinePlayers !== null && (
          <p>Verkkomoninpeli: {game.onlinePlayers.toString()}</p>
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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;

  height: 100%;
  color: ${({ theme }) => theme.palette.typography.dark};
  text-align: left;
  background-color: ${({ theme }) => theme.palette.primary.lightest};

  border-style: solid;
  border-right-width: 7px;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-color: #ffc600;

  hr {
    color: #ffffff33;
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
    color: ${({ theme }) => theme.palette.tertiary.dark};
    font-size: 1.4em;
  }
`;
