import { createSlice } from "@reduxjs/toolkit"

const initState = {value:0}

const updtcntSlice = createSlice({
    name: 'updtcntr',
    initialState:initState,
    reducers: {
        loadCnt: (state, action) => {
            state.value = parseInt(action.payload)
        },
        cntrInc: (state) => {
            state.value += 1
        },
        cntrDec: (state) => {
            if (state.value > 1) {
                state.value -= 1
            }
            else {
                state.value = 1
            }
        }
    }
})

export const {loadCnt, cntrInc, cntrDec} = updtcntSlice.actions
export default updtcntSlice.reducer