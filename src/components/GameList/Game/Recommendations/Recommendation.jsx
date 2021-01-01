import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Well } from '@adobe/react-spectrum';

const Recommendation = ({ author, children, className }) => {
  return (
    <Well>
      <p className={className}>{children}</p>
      <p className={className}>- {author}</p>
    </Well>
  );
};

Recommendation.propTypes = {
  author: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default styled(Recommendation)`
  margin-top: 0;
  margin-bottom: 0;

  :first-of-type {
    margin-bottom: 0.5rem;
  }
`;
