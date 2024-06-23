import React, { useState } from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(true);
  return (
    <div>Toggle
        <p>
            {
                isOn? <h1>This Toggle is on</h1> : <h1>This Toggle is off</h1>
            }
            <button onClick={()=> setIsOn(!isOn)}>Change</button>
        </p>
    </div>
  )
}

export default Toggle