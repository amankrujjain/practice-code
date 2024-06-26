import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);

    const increment = ()=>{
      setNumber(number + 1)
    };
    const decrement = ()=>{
      if(number > 0)
      setNumber(number - 1)
    };

  return (
    <>
    <div>{number}</div>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>
  )
};

export default Counter