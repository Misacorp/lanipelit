import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { darkTheme, Provider } from '@adobe/react-spectrum';
import WebFont from 'webfontloader';

import { ThemeProvider } from 'styled-components/macro';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import * as routes from './constants/routes';
import { StoreContextProvider } from './store/useStore';
/* Don't fear the wrappers! Start editing your home page in the Main component. */
import Main from './components/Main';

WebFont.load({
  google: {
    families: ['Vollkorn:700', 'Open Sans:300,400,600,800'],
  },
});

const App = function AppContent() {
  return (
    <StoreContextProvider>
      <Provider colorScheme="dark" theme={darkTheme}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />

            <Router>
              <Switch>
                <Route path={routes.ROOT} component={Main} />
              </Switch>
            </Router>
          </>
        </ThemeProvider>
      </Provider>
    </StoreContextProvider>
  );
};

export default App;
