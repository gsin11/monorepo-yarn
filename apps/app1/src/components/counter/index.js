import React from 'react';
import Button from 'atoms/Button';

const Component = ({ data, handleIncrementClick, handleDecrementClick }) => {
  return (
    <div>
      <h1>Count: {data.count}</h1>
      <Button onClick={handleDecrementClick} type="button">Decrement</Button>
      <Button onClick={handleIncrementClick} type="button">Increment</Button>
    </div>
  );
};

export default Component;