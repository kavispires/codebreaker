import React from 'react';
import Button from '@material-ui/core/Button';

import gameEngine from '../engine';
import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';

import Header from './Header';

const Rules = () => {
  // Global States
  const [game] = useGlobalState('game');
  const [screen, setScreen] = useGlobalState('screen');

  return (
    <div className="game">
      <Header />

      <h1>Rules</h1>
    </div>
  );
};

export default Rules;
