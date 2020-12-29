import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Recommendation = ({ author, children, className }) => {
  return (
    <div className={className}>
      <p>{children}</p>
      <p>- {author}</p>
    </div>
  );
};

Recommendation.propTypes = {
  author: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default styled(Recommendation)`
  font-family: ${({ theme }) => theme.typography.base.fontFamily};
  border: 1px solid ${({ theme }) => theme.palette.typography.dark};
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;

  & > p:first-of-type {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  & > p:last-of-type {
    padding: 0.125rem 1rem;
    margin: 0;
    background-color: ${({ theme }) => theme.palette.typography.dark};
    color: ${({ theme }) => theme.palette.typography.light};
    font-weight: 600;
    text-align: right;
  }
`;
