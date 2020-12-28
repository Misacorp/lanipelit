import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Menu, MenuTrigger, ActionButton, Item } from '@adobe/react-spectrum';

import GameList from './GameList/GameList';

import gamesRaw from '../games';
import Game from '../types/Game';

const games = gamesRaw.map(g => new Game(g));

const MainStructure = ({ className }) => {
  // Get all author values.
  const authors = useMemo(() => {
    const authorSet = new Set();
    games.forEach(game => {
      game.recommendations.forEach(rec => authorSet.add(rec.author));
    });
    return Array.from(authorSet).map(name => ({ name }));
  }, []);

  // Author state
  const [selectedAuthors, setSelectedAuthors] = useState(new Set());

  // Get all tag values
  const tags = useMemo(() => {
    const tagSet = new Set();
    games.forEach(game => {
      game.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).map(name => ({ name }));
  }, []);

  // Tag state
  const [selectedTags, setSelectedTags] = useState(new Set());

  // Filter games by selected author
  let sortedGames = games;
  sortedGames = sortedGames.filter(game => {
    const recommenders = game.recommendations.map(rec => rec.author);

    if (selectedAuthors.size === 0) {
      // No author selection - no filtering!
      return true;
    }

    // The game must have recommendations from ANY selected authors
    return Array.from(selectedAuthors).some(author =>
      recommenders.includes(author),
    );
  });

  // Filter games by selected tag
  sortedGames = sortedGames.filter(game => {
    const { tags: gameTags } = game;

    if (selectedTags.size === 0) {
      // No tag selection - no filtering!
      return true;
    }

    // The game must have all selected tags
    return Array.from(selectedTags).every(tag => gameTags.includes(tag));
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

      <MenuTrigger closeOnSelect={false}>
        <ActionButton>Tagit</ActionButton>
        <Menu
          selectionMode="multiple"
          selectedKeys={selectedTags}
          onSelectionChange={setSelectedTags}
        >
          {tags.map(tag => (
            <Item key={tag.name}>{tag.name}</Item>
          ))}
        </Menu>
      </MenuTrigger>

      <MenuTrigger closeOnSelect={false}>
        <ActionButton>Suosittelijat</ActionButton>
        <Menu
          selectionMode="multiple"
          selectedKeys={selectedAuthors}
          onSelectionChange={setSelectedAuthors}
        >
          {authors.map(author => (
            <Item key={author.name}>{author.name}</Item>
          ))}
        </Menu>
      </MenuTrigger>

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
