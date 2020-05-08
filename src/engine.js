import { shuffle, splitList } from './utils';
import CARDS from './utils/cards';
import { NUMBERS } from './utils/constants';

class GameEngine {
  constructor() {
    this.playerCount = 0;
    this.code = null;
    this.hands = {};
    this.questions = [];
  }

  get state() {
    return {
      code: this.code,
      hands: this.hands,
    };
  }

  setup(playerCount) {
    this.playerCount = playerCount;

    const shuffledNumbers = shuffle(NUMBERS);

    let playerHands = null;

    if (playerCount < 4) {
      playerHands = splitList(shuffledNumbers, 4);
    } else {
      playerHands = splitList(shuffledNumbers, 5);
    }

    if (playerCount > 2) {
      this.code = playerHands.pop().sort();
    }

    this.hands = playerHands.reduce((acc, hand, index) => {
      if (index < playerCount) {
        acc[index + 1] = {
          player: index + 1,
          hand: hand.sort(),
        };
      }
      return acc;
    }, {});

    this.questions = shuffle(CARDS);

    return this.state;
  }

  reset() {
    this.playerCount = 0;
  }
}

export default new GameEngine();
