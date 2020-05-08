import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import gameEngine from '../engine';
import useGlobalState from '../useGlobalState';

import Code from './Code';
import Header from './Header';
import PlayerCodeModal from './PlayerCodeModal';
import Question from './Question';

const Game = () => {
  // Global States
  const [game, setGame] = useGlobalState('game');
  const [selectedQuestion, setSelectedQuestion] = useGlobalState('selectedQuestion');
  const [activePlayerModal, setActivePlayerModal] = useGlobalState('playerModal');

  const revealCode = (playerNumber) => {
    setActivePlayerModal(playerNumber);
  };

  const handleConfirmQuestion = () => {
    setGame(gameEngine.confirmQuestion(selectedQuestion));
    setSelectedQuestion(null);
  };

  console.log(game);

  return (
    <div className="game">
      <Header />
      <div className="content">
        <div className="code-reveal">
          <p>Reveal each code for each player to take note while others close their eyes.</p>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            {Object.values(game.hands).map((entry) => (
              <Button
                className="btn btn--group"
                key={entry.player}
                onClick={() => revealCode(entry.player)}
              >
                Player {entry.player}
              </Button>
            ))}
          </ButtonGroup>
          {activePlayerModal && <PlayerCodeModal />}
        </div>
        <h3>On your turn:</h3>
        <h2>
          Ask a Question <span className="text-green">OR</span> Guess the Code
        </h2>
        {game.code && (
          <button className="btn btn--invisible" onClick={() => revealCode('code')}>
            <Code code={game.code} isHidden />
          </button>
        )}

        <p>Questions Left: {game.questionsLeft} (including the visible ones)</p>
        <div className="questions-list">
          {game.activeQuestions.map((question, index) => (
            <Question key={question.id} question={question} position={index} />
          ))}
        </div>

        {selectedQuestion && (
          <Button className="btn btn--solid" variant="contained" onClick={handleConfirmQuestion}>
            Confirm Question
          </Button>
        )}
      </div>
    </div>
  );
};

export default Game;
