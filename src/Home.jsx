import React from 'react'
// import { useDispatch,useSelector } from 'react-redux';

import { useDispatch,useSelector } from 'react-redux'

const Home = () => {
    const {value} = useSelector(state=> state.reducer)
    const dispatch = useDispatch();
    // const {value} = useSelector(state => state.reducer)
    // const dispatch = useDispatch();

    const addBtn = ()=>{
        dispatch({
            type:"increment"
        })
    }
    const decValue =()=>{
        dispatch({
            type:"decrement"
        })
    }
    const byValue = ()=>{
        dispatch({
            type:"byValue",
            payload:20
        })
    }

    // const addBtn= ()=>{
    //     dispatch({
    //         type:"increment"
    //     })
    // }
    // const decValue = ()=>{
    //     dispatch({
    //         type:"decrement"
    //     })
    // }
    // const byValue = ()=>{
    //     dispatch({
    //         type:"incrementByValue",
    //         payload:20
    //     })
    // }
  return (
    <div>
        <h3>{value}</h3>
        <button onClick={addBtn}>Increment</button>
        <button onClick={byValue}>By Value</button>

        <button onClick={decValue}>Decrement</button>
    </div>
  )
}

export default Home