import { useState, useMemo } from 'react';

const useTagFilter = games => {
  // Get all tag values
  const tags = useMemo(() => {
    const tagSet = new Set();
    games.forEach(game => {
      game.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).map(name => ({ name }));
  }, [games]);

  // Tag state
  const [selectedTags, setSelectedTags] = useState(new Set());

  return {
    tags,
    selectedTags,
    setSelectedTags,
  };
};

export default useTagFilter;
