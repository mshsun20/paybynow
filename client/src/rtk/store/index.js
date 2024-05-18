import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/CounterSlice'

const store = configureStore({
  reducer: {
    counters: counterSlice
  }
})

export default store