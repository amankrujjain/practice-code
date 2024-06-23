import React from 'react'

const Items = () => {
    // const items = ['item1','item2','item3','item4'];
    const items = {
        key1: 'item1',
        key2: 'item2',
        key3: 'item3',
        key4: 'item4'
    };
  return (
    <>
        {
            Object.keys(items).map((keys) =>(
                <li key={keys}> {items[keys]}</li>
            ))
        }
    </>
  )
}

export default Items