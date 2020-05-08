import { createGlobalState } from 'react-hooks-global-state';

import gameEngine from './engine';

import { SCREENS } from './utils/constants';

const initialState = {
  game: gameEngine.state,
  screen: SCREENS.HOME,
  showCode1: false,
  showCode2: false,
  showCode3: false,
  showCode4: false,
  showAnswer: false,
};

const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
