import React from 'react';
import styled from 'styled-components';
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
  font-size: 1rem;
  border: 1px solid #fff;
  margin: 1rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;

  & > p:first-of-type {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  & > p:last-of-type {
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0;
    background-color: #fff;
    color: ${({ theme }) => theme.palette.typography.dark};
    font-weight: 600;
    text-align: right;
  }
`;
