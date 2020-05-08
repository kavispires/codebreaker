import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import logo from '../images/codebreaker-logo.svg';

import gameEngine from '../engine';
import useGlobalState from '../useGlobalState';
import { COLORS, SCREENS } from '../utils/constants';

const Home = () => {
  // Global States
  const [, setGame] = useGlobalState('game');
  const [, setScreen] = useGlobalState('screen');
  // Local States
  const [players, setPlayers] = useState(3);

  const handleCreateGame = () => {
    setGame(gameEngine.setup(players));
    setScreen(SCREENS.GAME);
  };

  console.log(players);

  return (
    <div className="home">
      <img className="logo" src={logo} alt="Carto logo" />
      <h1>Carto</h1>

      <FormGroup>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ color: COLORS.PRIMARY }}>
            Player Count
          </FormLabel>
          <RadioGroup
            aria-label="mode"
            name="mode"
            value={players}
            onChange={(event) => setPlayers(+event.target.value)}
          >
            <FormControlLabel value={1} control={<Radio />} label="Solo" disabled />
            <FormControlLabel value={2} control={<Radio />} label="2 players" />
            <FormControlLabel value={3} control={<Radio />} label="3 players" />
            <FormControlLabel value={4} control={<Radio />} label="4 players" />
          </RadioGroup>
        </FormControl>
      </FormGroup>

      <div className="home__actions">
        <Button variant="outlined" className="btn btn--outline" onClick={handleCreateGame}>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default Home;
