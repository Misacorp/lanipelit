import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Game from '../../../types/Game';

/**
 * Displays a game's tags.
 */
const TagListStructure = ({ game, className }) => {
  if (game.tags.length === 0) return null;

  return (
    <div className={className}>
      <h3>Tagit</h3>
      <ul>
        {game.tags.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const TagList = styled(TagListStructure)`
  ul {
    list-style-type: none;

    li {
      display: inline;
      margin-right: 0.5rem;

      ::after {
        content: ',';
      }
    }
  }
`;

TagListStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

export default TagList;
