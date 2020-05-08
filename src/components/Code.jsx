import React from 'react';

import Number from './Number';

const Code = ({ code, isHidden = true }) => {
  return (
    <div className="code-result">
      {code.map((numberCode, index) => (
        <Number key={numberCode} numberCode={numberCode} position={index} isHidden={isHidden} />
      ))}
    </div>
  );
};

export default Code;
