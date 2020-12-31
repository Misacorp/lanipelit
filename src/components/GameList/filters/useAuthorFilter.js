import { useState, useMemo } from 'react';

const useAuthorFilter = games => {
  // Gather unique authors
  const authors = useMemo(() => {
    const authorSet = new Set();
    games.forEach(game => {
      game.recommendations.forEach(rec => {
        if (rec.author) {
          authorSet.add(rec.author);
        }
      });
    });
    return Array.from(authorSet).map(name => ({ name }));
  }, [games]);

  // Author state
  const [selectedAuthors, setSelectedAuthors] = useState(new Set());

  return {
    authors,
    selectedAuthors,
    setSelectedAuthors,
  };
};

export default useAuthorFilter;
