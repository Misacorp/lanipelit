import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameList from './GameList/GameList';

import gamesRaw from '../games';
import Game from '../types/Game';

const DEFAULT_SELECT_VALUE = '';

const games = gamesRaw.map(g => new Game(g));

const MainStructure = ({ className }) => {
  // Get all author values.
  const authors = useMemo(() => {
    const authorSet = new Set();
    games.forEach(game => {
      game.recommendations.forEach(rec => authorSet.add(rec.author));
    });
    return Array.from(authorSet);
  }, []);

  // Author state
  const [selectedAuthor, selectAuthor] = useState('');
  const handleAuthorChange = a => {
    selectAuthor(a.target.value);
  };

  // Get all tag values
  const tags = useMemo(() => {
    const tagSet = new Set();
    games.forEach(game => {
      game.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, []);

  // Tag state
  const [selectedTag, setSelectedTag] = useState('');
  const handleTagChange = a => {
    setSelectedTag(a.target.value);
  };

  // Filter games by selected author
  let sortedGames = games;
  sortedGames = sortedGames.filter(game => {
    const recommenders = game.recommendations.map(rec => rec.author);
    return (
      recommenders.includes(selectedAuthor) ||
      selectedAuthor === DEFAULT_SELECT_VALUE
    );
  });

  // Filter games by selected tag
  sortedGames = sortedGames.filter(game => {
    const { tags: gameTags } = game;
    return (
      gameTags.includes(selectedTag) || selectedTag === DEFAULT_SELECT_VALUE
    );
  });

  // Sort games alphabetically
  sortedGames = sortedGames.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return (
    <div className={className}>
      <h1>Lanipelit</h1>
      <p>Selaa laneilla pelattavaksi ehdotettuja pelejä ja löydä suosikkisi!</p>

      <select id="tag-select" onChange={handleTagChange}>
        <option value={DEFAULT_SELECT_VALUE}>Kaikki tagit</option>
        {tags.map(tag => (
          <option value={tag} key={tag}>
            {tag}
          </option>
        ))}
      </select>

      <select id="author-select" onChange={handleAuthorChange}>
        <option value={DEFAULT_SELECT_VALUE}>Kaikki suosittelijat</option>
        {authors.map(author => (
          <option value={author} key={author}>
            {author}
          </option>
        ))}
      </select>

      <GameList games={sortedGames} />
    </div>
  );
};

const Main = styled(MainStructure)`
  text-align: center;
  color: ${({ theme }) => theme.palette.typography.light};

  h1 {
    margin: 1rem;
    margin-top: 1.5rem;
    padding: 0;
  }

  select {
    margin: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.palette.primary.lighter};
    color: ${({ theme }) => theme.palette.typography.dark};
  }
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
