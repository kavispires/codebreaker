import { COLOR_CODES } from './constants';
/**
 * Shuffles list returning a new shuffled instance
 * @param {array} list
 * @returns {array}
 */
export const shuffle = (list) => {
  const result = [...list];
  result.sort(() => Math.random() - 0.5);
  return result;
};

/**
 * Splits a list of elements into n number of chunks with equal number of elements
 * @param {array} list
 * @param {number} chunks how many chuncks it should be splitted to
 * @returns {array} array of arrays of items
 */
export const splitList = (list, chunks = 2) => {
  const result = [];
  let chunkIndex = 0;
  for (let i = 0; i < list.length; i++) {
    if (result[chunkIndex] === undefined) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(list[i]);
    chunkIndex = chunkIndex === chunks - 1 ? 0 : chunkIndex + 1;
  }

  return result;
};

/**
 * Transform the number code into an object
 * @param {string} numberCode
 */
export const decodeNumber = (numberCode) => {
  const [numberString, colorLetter] = numberCode.split('');

  return {
    number: +numberString,
    color: COLOR_CODES[colorLetter],
    className: `number number--${COLOR_CODES[colorLetter]}`,
  };
};
