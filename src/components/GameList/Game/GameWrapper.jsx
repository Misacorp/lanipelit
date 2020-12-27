import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

const GameWrapper = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;

  flex-basis: 100%;

  margin-bottom: 2rem;

  @media ${breakpoints.m} {
    flex-basis: 50%;
  }

  @media ${breakpoints.xl} {
    flex-basis: 33%;
  }
`;

export default GameWrapper;
