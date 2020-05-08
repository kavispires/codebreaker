import React from 'react';
import Container from '@material-ui/core/Container';

import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';

import Game from './Game';
import Home from './Home';

const ScreenComponents = {
  [SCREENS.GAME]: <Game />,
  [SCREENS.HOME]: <Home />,
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
