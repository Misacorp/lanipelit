import PlayerCounts from './PlayerCounts';
import Recommendation from './Recommendation';

class Game {
  constructor(props) {
    this.title = props.title;
    this.description = props.description;
    this.tags = props.tags;
    this.platforms = props.platforms;
    this.crossPlayPlatforms = props.crossPlayPlatforms;

    this.url = props.url;
    this.imageUrl = props.imageUrl;

    this.onlinePlayers = new PlayerCounts(props.onlinePlayers);
    this.localPlayers = props.localPlayers
      ? new PlayerCounts(props.localPlayers)
      : null;

    this.recommendations = props.recommendations.map(
      r => new Recommendation(r),
    );
  }
}

export default Game;
