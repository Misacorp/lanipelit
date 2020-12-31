import rawGames from '../constants/games';
import rawRecommendations from '../constants/recommendations';
import Game from '../types/Game';
import Recommendation from '../types/Recommendation';

/**
 * Transforms raw games and recommendations into a single game list.
 * Combines recommendations into correct games.
 * @returns {Game[]}
 */
export default () =>
  rawGames.map(g => {
    const game = new Game(g);

    game.recommendations = [
      ...game.recommendations,
      ...rawRecommendations
        .filter(rawRecommendation => rawRecommendation.title === game.title)
        .map(rawRecommendation => rawRecommendation.recommendations)
        .map(rList =>
          rList.map(
            r =>
              new Recommendation({
                author: r.author,
                content: r.content,
              }),
          ),
        ),
    ].flat();

    return game;
  });
