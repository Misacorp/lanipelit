import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Recommendation from './Recommendation';
import Game from '../../../../types/Game';

const RecommendationsStructure = ({ game, className }) => {
  if (!game.recommendations?.length) return null;

  return (
    <div className={className}>
      <h3>Suositukset</h3>

      {game.recommendations.map(r => (
        <Recommendation author={r.author}>{r.content}</Recommendation>
      ))}
    </div>
  );
};

RecommendationsStructure.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  className: PropTypes.string,
};

const Recommendations = styled(RecommendationsStructure)``;

export default Recommendations;
