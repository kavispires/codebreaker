import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import useGlobalState from '../useGlobalState';
import useInferval from '../utils/useInterval';

import Code from './Code';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PlayerCodeModal = () => {
  // Global state
  const [game] = useGlobalState('game');
  const [activePlayerModal, setActivePlayerModal] = useGlobalState('playerModal');
  // Local state
  const [isRevealed, setIsRevealed] = useState(false);
  const [revealCountdown, setRevealCountdown] = useState(3);
  const [isRevealCountdownRunning, setIsRevealCountdownRunning] = useState(true);
  const [hideCountdown, setHideCountdown] = useState(20);
  const [isHideCountdownRunning, setIsHideCountdownRunning] = useState(false);

  const activeCode = activePlayerModal === 'code' ? game.code : game.hands[activePlayerModal].hand;

  const titlePrefix =
    activePlayerModal === 'code' ? 'Code Result' : `Player ${activePlayerModal} Code`;

  useInferval(
    () => {
      const newCountdown = revealCountdown - 1;
      if (newCountdown >= 0) {
        setRevealCountdown(newCountdown);
      } else {
        setIsRevealed(true);
        setIsRevealCountdownRunning(false);
        setIsHideCountdownRunning(true);
      }
    },
    isRevealCountdownRunning ? 1000 : null
  );

  useInferval(
    () => {
      const newCountdown = hideCountdown - 1;
      if (newCountdown >= 0) {
        setHideCountdown(newCountdown);
      } else {
        handleClose();
      }
    },
    isHideCountdownRunning ? 1000 : null
  );

  const handleClose = () => {
    setIsRevealCountdownRunning(false);
    setIsHideCountdownRunning(false);
    setActivePlayerModal(null);
  };

  return (
    <Dialog
      open={Boolean(activePlayerModal)}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        {isRevealed ? titlePrefix : `${titlePrefix} will be revealed in...`}
      </DialogTitle>
      <DialogContent>
        {isRevealed ? (
          <Code code={activeCode} isHidden={!isRevealed} />
        ) : (
          <div className="countdown">{revealCountdown}</div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {isRevealed ? `Auto-close in ${hideCountdown}` : 'Close'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlayerCodeModal;
