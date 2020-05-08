import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import GamesIcon from '@material-ui/icons/Games';
import HistoryIcon from '@material-ui/icons/History';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import gameEngine from '../engine';
import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';

const Header = () => {
  // Global States
  const [screen, setScreen] = useGlobalState('screen');

  const handleReset = () => {
    gameEngine.reset();
    setScreen(SCREENS.SETUP);
  };

  const handleLeftButton = () => {
    setScreen(screen === SCREENS.RULES ? SCREENS.GAME : SCREENS.RULES);
  };

  const icon = screen === SCREENS.RULES ? <GamesIcon /> : <MenuBookIcon />;

  return (
    <AppBar position="static" className="header">
      <Button className="header__btn" onClick={handleLeftButton} startIcon={icon}>
        {screen === SCREENS.RULES ? 'Game' : 'Rules'}
      </Button>
      <h3>Codebreaker</h3>
      <Button className="header__btn" onClick={handleReset} startIcon={<HistoryIcon />}>
        Reset
      </Button>
    </AppBar>
  );
};

export default Header;
