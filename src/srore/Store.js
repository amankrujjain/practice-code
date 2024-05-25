// import {configureStore} from '@reduxjs/toolkit';
// import { Reducer } from '../reducers/Reducer';

// const store = configureStore({
//     reducer:{
//         reducer:Reducer
//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "../reducers/Reducer";

const store = configureStore({
    reducer:{
        // counter:Reducer
        reducer:Reducer
    }
})

export default store;