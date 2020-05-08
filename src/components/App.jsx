import React from 'react';
import Container from '@material-ui/core/Container';

import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';

import Game from './Game';
import Home from './Home';
import Rules from './Rules';

const ScreenComponents = {
  [SCREENS.GAME]: <Game />,
  [SCREENS.HOME]: <Home />,
  [SCREENS.RULES]: <Rules />,
};

const App = () => {
  // Global States
  const [screen] = useGlobalState('screen');

  return (
    <Container maxWidth="lg" className="app-container">
      {ScreenComponents[screen]}
    </Container>
  );
};

export default App;
