import { configureStore } from "@reduxjs/toolkit";
// go to main.jsx, add provider with store

import counterSlice from "./slice/counterSlice"

export const store = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})