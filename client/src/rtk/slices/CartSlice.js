import { createSlice } from "@reduxjs/toolkit"
const initState = {carts:[]}

const cartSlice = createSlice({
    name:'cart',
    initialState:initState,
    reducers:[]
})