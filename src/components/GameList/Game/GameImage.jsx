import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const GameImage = ({ url, className }) => {
  if (!url) {
    return null;
  }

  return <div className={className} />;
};

GameImage.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

export default styled(GameImage)`
  width: 100%;
  height: 300px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
