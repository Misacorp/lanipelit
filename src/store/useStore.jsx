import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './StoreContext';

import * as gameListViewModes from '../constants/gameListViewModes';

/**
 * Provides access to the store context
 * @returns {Object} Store context value
 */
export default () => useContext(StoreContext);

export const StoreContextProvider = ({ children }) => {
  const [gameListView, setGameListView] = useState(gameListViewModes.LARGE);

  return (
    <StoreContext.Provider
      value={{
        gameListView,
        setGameListView,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node,
};
