import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Heading,
  Content,
  Button,
  Image,
  Footer,
  Flex,
} from '@adobe/react-spectrum';
import ViewDetail from '@spectrum-icons/workflow/ViewDetail';

import PlayerCounts from './PlayerCounts';

import GameObject from '../../../types/Game';

const Game = ({ game, setSelectedGame }) => {
  return (
    <View borderWidth="thin" borderColor="dark" borderRadius="small">
      <Flex direction="column" height="100%">
        <Image
          slot="hero"
          alt={`Kuva pelistä ${game.title}`}
          src={game.imageUrl}
          objectFit="cover"
          height={200}
        />

        <View flexGrow={1}>
          <Heading>{game.title}</Heading>

          <Content padding="size-250">
            <p>{game.description}</p>
          </Content>
        </View>

        <Footer justifySelf="end" marginBottom="1rem">
          <PlayerCounts game={game} />

          <p>{game.tags.join(', ')}</p>

          <Button onPress={() => setSelectedGame(game)} variant="cta" isQuiet>
            <Flex gap="0.5rem">
              <ViewDetail />
              Näytä lisää
            </Flex>
          </Button>
        </Footer>
      </Flex>
    </View>
  );
};

Game.propTypes = {
  game: PropTypes.instanceOf(GameObject).isRequired,
  setSelectedGame: PropTypes.func,
};

export default Game;
