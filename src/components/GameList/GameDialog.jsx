import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Heading,
  Content,
  Image,
  ButtonGroup,
  Button,
  Footer,
  Flex,
  Divider,
  Meter,
  Grid,
  Text,
} from '@adobe/react-spectrum';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';

import PlayerCounts from './Game/PlayerCounts';
import PlatformList from './Game/Platforms/PlatformList';
import Recommendations from './Game/Recommendations/Recommendations';

import Game from '../../types/Game';

/**
 * Displays more detailed information about a game.
 * @param game
 * @param prevGame
 * @param nextGame
 * @param index
 * @param max
 * @returns {JSX.Element}
 * @constructor
 */
const GameDialog = ({ game, prevGame, nextGame, index, max }) => {
  const isFirst = index === 0;
  const isLast = index === max;

  return (
    <Dialog size="L">
      <Image
        slot="hero"
        alt={`Kuva pelistä ${game.title}`}
        src={game.imageUrl}
        objectFit="cover"
        minHeight={200}
      />

      <Heading>{game.title}</Heading>

      <Content>
        <p>{game.description}</p>

        <Divider size="S" marginBottom="1rem" />

        <Flex justifyContent="space-between">
          <PlayerCounts game={game} />

          <Text color="notice">{game.tags.join(', ')}</Text>
        </Flex>

        <Grid columns={['1fr', '1fr', '1fr']} gap="1rem">
          <PlatformList game={game} type="AVAILABLE" />
          <PlatformList game={game} type="CROSS_PLAY" />
          <PlatformList game={game} type="GAME_PASS" />
        </Grid>

        <Recommendations game={game} />
      </Content>

      <Footer>
        <Flex
          direction="row"
          justifyContent="space-between"
          width="100%"
          wrap="wrap"
        >
          <Meter
            label="Pelit"
            value={((index + 1) / max) * 100}
            valueLabel={`${index + 1} / ${max}`}
            variant="positive"
            flexShrink={1}
            marginStart="auto"
            marginEnd="auto"
            marginBottom="0.5rem"
          />

          <ButtonGroup marginStart="auto" marginEnd="auto">
            <Button onPress={prevGame} variant="primary" isQuiet>
              <ChevronLeft />
              {isFirst ? 'Loppuun' : 'Edellinen'}
            </Button>

            <Button onPress={nextGame} variant="cta" isQuiet>
              {isLast ? 'Alkuun' : 'Seuraava'}
              <ChevronRight />
            </Button>
          </ButtonGroup>
        </Flex>
      </Footer>
    </Dialog>
  );
};

GameDialog.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  prevGame: PropTypes.func.isRequired,
  nextGame: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default GameDialog;
