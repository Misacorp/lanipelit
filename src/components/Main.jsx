import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import {
  Menu,
  MenuTrigger,
  ActionButton,
  Item,
  ToggleButton,
} from '@adobe/react-spectrum';

import GameList from './GameList/GameList';

import getGameList from '../util/getGameList';
import useStore from '../store/useStore';
import * as gameListViewModes from '../constants/gameListViewModes';
import useAuthorFilter from './GameList/filters/useAuthorFilter';
import useTagFilter from './GameList/filters/useTagFilter';

const games = getGameList();

/**
 * Main app content
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
const MainStructure = ({ className }) => {
  // View modes
  const { gameListView, setGameListView } = useStore();
  const viewOptions = [
    { name: 'Suuret kortit', value: gameListViewModes.LARGE },
    { name: 'Pienet kortit', value: gameListViewModes.SMALL },
    { name: 'Lista', value: gameListViewModes.LIST },
  ];

  // Filters
  const { authors, selectedAuthors, setSelectedAuthors } = useAuthorFilter(
    games,
  );
  const { tags, selectedTags, setSelectedTags } = useTagFilter(games);
  const [gamePassSelected, setGamePassSelected] = useState(false);

  // Filter games by selected author
  const sortedGames = games
    .filter(game => {
      // No author selection - no filtering!
      if (selectedAuthors.size === 0) return true;

      // The game must have recommendations from ANY selected authors
      return Array.from(selectedAuthors).some(author =>
        game.recommendations.map(rec => rec.author).includes(author),
      );
    })
    .filter(game => {
      // No tag selection - no filtering!
      if (selectedTags.size === 0) return true;

      // The game must have all selected tags
      return Array.from(selectedTags).every(tag => game.tags.includes(tag));
    })
    .filter(game => {
      if (!gamePassSelected) return true;
      return game.gamePassPlatforms?.length > 0;
    })
    .sort((a, b) => {
      // Sort games alphabetically
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });

  return (
    <div className={className}>
      <h1>Lanipelit</h1>
      <p>Selaa laneilla pelattavaksi ehdotettuja pelejä ja löydä suosikkisi!</p>

      <MenuTrigger closeOnSelect>
        <ActionButton>
          {viewOptions.find(o => o.value === gameListView).name}
        </ActionButton>
        <Menu onAction={setGameListView}>
          {viewOptions.map(viewMode => (
            <Item key={viewMode.value}>{viewMode.name}</Item>
          ))}
        </Menu>
      </MenuTrigger>

      <MenuTrigger closeOnSelect={false}>
        <ActionButton>
          {selectedTags.size === 0
            ? 'Tagit'
            : Array.from(selectedTags).join(', ')}
        </ActionButton>
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
        <ActionButton>
          {selectedAuthors.size === 0
            ? 'Suosittelijat'
            : Array.from(selectedAuthors).join(', ')}
        </ActionButton>
        <Menu
          title="Lol"
          selectionMode="multiple"
          selectedKeys={selectedAuthors}
          onSelectionChange={setSelectedAuthors}
        >
          {authors.map(author => (
            <Item key={author.name}>{author.name}</Item>
          ))}
        </Menu>
      </MenuTrigger>

      <ToggleButton
        isEmphasized
        isSelected={gamePassSelected}
        onChange={setGamePassSelected}
      >
        Game Pass
      </ToggleButton>

      <GameList games={sortedGames} />
    </div>
  );
};

const Main = styled(MainStructure)`
  text-align: center;
  color: ${({ theme }) => theme.palette.typography.light};
  min-height: 100vh;

  h1 {
    margin: 0 1rem 1rem;
    padding: 1.5rem 0 0;
  }

  button {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
