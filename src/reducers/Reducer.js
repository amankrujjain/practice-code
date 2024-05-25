// import { createAction,createReducer } from "@reduxjs/toolkit";
// const increment = createAction('increment');
// const decrement = createAction('decrement');
// const incrementByValue = createAction('incrementByValue')

// const initialState = {
//     value:0
// }

// export const Reducer = createReducer(initialState,(builder)=>{
//     builder.addCase(increment,(state)=>{
//         state.value++
//     })
//     .addCase(decrement,(state,action)=>{
//         state.value--
//     })
//     .addCase(incrementByValue,(state,action)=>{
//         state.value = state.value + action.payload
//     })
// })

import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");
const byValue = createAction("byValue");

const initialState = {
    value:0
}

export const Reducer = createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state)=>{
        state.value++
    })
    .addCase(decrement,(state)=>{
        state.value--
    })
    .addCase(byValue,(state,action)=>{
        state.value += action.payload 
    })
})