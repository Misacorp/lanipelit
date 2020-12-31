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
} from '@adobe/react-spectrum';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';

import Game from '../../types/Game';
import PlayerCounts from './Game/PlayerCounts';

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
        minHeight={300}
      />

      <Heading>{game.title}</Heading>

      <Content>
        <p>{game.description}</p>

        <Divider size="S" marginBottom="1rem" />

        <PlayerCounts game={game} />
      </Content>

      <Footer>
        <Flex direction="row" justifyContent="space-between" width="100%">
          <Meter
            label="Pelit"
            value={((index + 1) / max) * 100}
            valueLabel={`${index + 1} / ${max}`}
            variant="positive"
          />

          <ButtonGroup>
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
