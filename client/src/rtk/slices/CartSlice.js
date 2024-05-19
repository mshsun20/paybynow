import { createSlice } from "@reduxjs/toolkit"
const initState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addItm: (state, action) => {
            state.push(action.payload)
        },
        edtItm: (state, action) => {
            const indx = state.findIndex((elm) => elm.item.id === action.payload.item.id)
            state.splice(indx,1,action.payload)
        },
        rmvItm: (state, action) => {
            const indx = state.findIndex((elm) => elm.item.id === action.payload)
            state.splice(indx,1)
        },
        dltAllItm: (state) => {
            state.splice(0,state.length)
        }
    }
})

// console.log(cartSlice.actions)

export const {addItm, edtItm, rmvItm, dltAllItm} = cartSlice.actions
export default cartSlice.reducer