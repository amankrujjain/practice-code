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

    let data = [
        { id: 1, brand: 'Volkswagen', car: ['punto', 'namek'] },
        { id: 2, brand: 'Nissan', car: ['sunny', 'micra'] },
        { id: 3, brand: 'Tata', car: ['Punch', 'nexon', 'altroz', 'Harrier'] },
        { id: 4, brand: 'Maruti Suzuki', car: ['Buleno', 'Dezire', 'Swift', 'Fronks'] },
        { id: 5, brand: 'Mahindra', car: ['XUV300', 'XUV500', 'XUV700'] }

    ];

    let result = data.filter(item => item.car.length <=2).map(item => item.brand).join(", ")

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
        <p>Below is the result</p>
        <li>{result}</li>
        
    </div>
  )
}

export default Home