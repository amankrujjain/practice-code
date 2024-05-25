import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);

    const increment = ()=>{
        setNumber(number+1);
    };
    const decrement = ()=>{
        if(number > 0){
            setNumber(number-1);
        };
    };

  return (
    <>
    <div>{number}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter