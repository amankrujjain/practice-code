import React, { useState } from 'react'

const Display = () => {
    let[text,subtext] = useState('');

    const handleChange = (e) =>{
        subtext(e.target.value);
    }
  return (
    <div>
        <input placeholder='Enter text' onChange={handleChange}/>
        <h1>{text}</h1>
    </div>
  )
}

export default Display