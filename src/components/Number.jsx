import React from 'react';

import { decodeNumber } from '../utils';
import { INDEX_LETTER } from '../utils/constants';

const Number = ({ numberCode, position, isHidden = true }) => {
  const numObj = decodeNumber(numberCode);

  return (
    <div className="number-tile">
      <span className="letter">{INDEX_LETTER[position]}</span>
      {isHidden ? (
        <span className="number number--hidden">?</span>
      ) : (
        <span className={numObj.className}>{numObj.number}</span>
      )}
    </div>
  );
};

export default Number;
