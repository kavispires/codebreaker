import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

// Images
import ruleGoal4Img from '../images/rule-goal-4.jpg';
import ruleGoal5Img from '../images/rule-goal-5.jpg';
import ruleSetup4Img from '../images/rule-setup-4.jpg';
import ruleSetup5Img from '../images/rule-setup-5.jpg';
import ruleSetupRevealImg from '../images/rule-setup-reveal.jpg';
import ruleTurnImg from '../images/rule-turn.jpg';
import ruleQuestionImg from '../images/rule-question.jpg';
import ruleExample1Img from '../images/rule-example-1.jpg';
import ruleExample2Img from '../images/rule-example-2.jpg';
import ruleExample3Img from '../images/rule-example-3.jpg';
import ruleExample4Img from '../images/rule-example-4.jpg';

import useGlobalState from '../useGlobalState';

import Header from './Header';
import { NUMBER_OF_DIGITS, SCREENS } from '../utils/constants';

const steps = ['Goal', 'Setup', 'Turn', 'Answering', 'Guess', 'End Game'];

const RuleGoal = ({ ruleSet }) => {
  const digits = NUMBER_OF_DIGITS[ruleSet];

  const imgSrc = digits === 4 ? ruleGoal4Img : ruleGoal5Img;

  return (
    <div className="rule">
      <p>Discover your opponents {digits}-digit code (number, color, position)</p>
      <div className="rule-image">
        <img src={imgSrc} alt="rule goal" />
      </div>
    </div>
  );
};

const RuleSetup = ({ ruleSet }) => {
  const digits = NUMBER_OF_DIGITS[ruleSet];

  const imgSrc = digits === 4 ? ruleSetup4Img : ruleSetup5Img;

  return (
    <div className="rule">
      <p>Each player will get a set of {digits} numbers. </p>
      <div className="rule-image">
        <img src={imgSrc} alt="rule setup" />
      </div>
      <p>
        Each code is always sorted by ascending order with black numbers coming before white
        numbers.
        <br />
        Both 5's in the game are green.
        <br />
        Take turns revealing each player code and take note while other players close their eyes.
      </p>
      <div className="rule-image">
        <img src={ruleSetupRevealImg} alt="rule setup" />
      </div>
    </div>
  );
};

const RuleTurn = () => {
  return (
    <div className="rule">
      <p>On your turn, you can do one of two options: Ask a question card or Guess the code.</p>
      <div className="rule-image">
        <img src={ruleTurnImg} alt="rule turn" />
      </div>
    </div>
  );
};

const RuleQuestion = ({ ruleSet }) => {
  const paragraph = {
    2: 'Your opponent must answer honestly.',
    3: 'Both your opponents must answer honestly.',
    4: 'Everybody (including you) must answer honestly.',
  };

  return (
    <div className="rule">
      <p>Select an available question, ask it and then press confirm.</p>
      <div className="rule-image">
        <img src={ruleQuestionImg} alt="rule question" />
      </div>
      <p>{paragraph[ruleSet]}</p>
    </div>
  );
};

const RuleAnswering = () => {
  return (
    <div className="rule">
      <p>Here are some examples of how to answer.</p>
      <div className="rule-image">
        <img src={ruleExample1Img} alt="rule answer" />
      </div>
      <p>Example 1: "I have a 5 on C and a 5 on D"</p>
      <div className="rule-image">
        <img src={ruleExample2Img} alt="rule answer" />
      </div>
      <p>Example 2: "I have a 1 on B" (if asked about number 1)</p>
      <div className="rule-image">
        <img src={ruleExample3Img} alt="rule answer" />
      </div>
      <p>Example 3: "A and B have the same color and D and E have the same color"</p>
      <div className="rule-image">
        <img src={ruleExample4Img} alt="rule answer" />
      </div>
      <p>Example 4: "A and B are consecutive and D and E are also consecutive"</p>
    </div>
  );
};

const RuleGuess = ({ ruleSet }) => {
  return (
    <div className="rule">
      {ruleSet === 2 ? (
        <p>
          Ask your opponent out loud! <br />
          If you are correct, your opponent has the chance to guess yours as well. If the opponent
          is also correct, the game ends on a tie, else, you win!
        </p>
      ) : (
        <Fragment>
          <div className="rule-image">
            <img src={ruleSet === 3 ? ruleGoal5Img : ruleGoal4Img} alt="rule question" />
          </div>

          <p>
            <b>You can only guess once!</b> <br />
            Announce that you are guessing, write down your guess. Everybody close their eyes and
            click on the center code to reveal it. After the window auto-closes, announce if you got
            it right or not. <br />
            If you got it, everybody else who hasn't had a turn this round can attempt to guess it
            too. <br />
            If you got it wrong, sit back and let other players continue the game. <br />
            You still have to answer any questions, but you are out of the game
          </p>
        </Fragment>
      )}
    </div>
  );
};

const RuleEndGame = ({ ruleSet }) => {
  return ruleSet === 2 ? (
    <div className="rule">
      <p>When one of you tries to guess the code the game ends.</p>
      <p>
        The game also ends when there are no question cards left. Each player may try guessing the
        code now.
      </p>
    </div>
  ) : (
    <div className="rule">
      <p>
        When a player guessed and got the code right, whoever hasn't gone this round yet may make a
        final guess. Reveal the code and see who wins.
      </p>
      <p>
        The game also ends when there are no question cards left. Everybody can try one time
        guessing the code if they haven't done so yet.
      </p>
    </div>
  );
};

const ruleComponents = (ruleSet) => {
  console.log(ruleSet);
  return {
    Goal: <RuleGoal ruleSet={ruleSet} />,
    Setup: <RuleSetup ruleSet={ruleSet} />,
    Turn: <RuleTurn />,
    Question: <RuleQuestion ruleSet={ruleSet} />,
    Answering: <RuleAnswering />,
    Guess: <RuleGuess ruleSet={ruleSet} />,
    'End Game': <RuleEndGame ruleSet={ruleSet} />,
  };
};

const Rules = () => {
  // Global States
  const [game] = useGlobalState('game');
  const [, setScreen] = useGlobalState('screen');
  // Local States
  const [ruleSet, setRuleSet] = useState(game.playerCount);
  const [ruleStep, setRuleStep] = useState(0);

  const handleNext = () => {
    if (ruleStep === steps.length - 1) {
      setScreen(SCREENS.GAME);
    } else {
      setRuleStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setRuleStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setRuleStep(0);
  };

  const ruleComponent = ruleComponents(ruleSet)[steps[ruleStep]];

  return (
    <div className="rules">
      <Header />
      <div className="content">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button className="btn btn--group" onClick={() => setRuleSet(2)}>
            2 Player Rules
          </Button>
          <Button className="btn btn--group" onClick={() => setRuleSet(3)}>
            3 Player Rules
          </Button>
          <Button className="btn btn--group" onClick={() => setRuleSet(4)}>
            4 Player Rules
          </Button>
        </ButtonGroup>

        <h1>Rules for {ruleSet} players</h1>
        <Stepper activeStep={ruleStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="rule-container">{ruleComponent}</div>
        {ruleStep === steps.length ? (
          <div className="action-buttons">
            <p>Your done with the rules! Good Luck</p>
            <Button onClick={handleReset}>Restart</Button>
          </div>
        ) : (
          <div className="action-buttons">
            <Button
              variant="outlined"
              className="btn btn--outline"
              disabled={ruleStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button variant="outlined" className="btn btn--outline" onClick={handleNext}>
              {ruleStep === steps.length - 1 ? 'Start Game' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rules;
