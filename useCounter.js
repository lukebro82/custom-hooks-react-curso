import { useState } from "react";

export const useCounter = (initialCounter = 10) => {
  const [counter, setcounter] = useState(initialCounter);

  const increment = () => {
    setcounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) return;
    setcounter(counter - 1);
  };

  const reset = () => {
    setcounter(initialCounter);
  };

  return { counter, increment, decrement, reset };
};
