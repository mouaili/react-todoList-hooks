import React, { useState } from 'react';

const FunctionState = () => {
  const [counter, setThisCounter] = useState(0);

  console.log(counter, setThisCounter);
  const handleIncrement = () => {
    console.log('click');
    setThisCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      <h3 className="text-info mt-3">2 - Function Sate</h3>
      <p className="fw-bold">Counter : {counter} </p>
      {/* First Solution */}
      <button onClick={handleIncrement} className="btn btn-info">
        Increment
      </button>
      {/* Second Soultion */}
      {/* <button
        onClick={() => setThisCounter(prevCounter => prevCounter + 1)}
        className="btn btn-info"
      >
        Increment
      </button> */}
      <hr />
    </div>
  );
};

export default FunctionState;
