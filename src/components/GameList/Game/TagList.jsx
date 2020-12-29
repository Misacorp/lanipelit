import React from 'react';
import styled from 'styled-components/macro';
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
        {game.tags.map((t, index) => (
          <li key={t}>
            {t}
            {index !== game.tags.length - 1 ? ', ' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TagList = styled(TagListStructure)`
  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline;
      margin-right: 0.5rem;
    }
  }
`;

TagListStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

export default TagList;
