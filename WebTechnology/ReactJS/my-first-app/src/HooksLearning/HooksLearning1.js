import { useState } from "react";

const HooksLearning1 = () => {
  const [counter, setCounter] = useState(15);
  const updateCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={updateCounter}>Update Counter</button>
      <h1>{counter}</h1>
    </>
  );
};
export default HooksLearning1;
