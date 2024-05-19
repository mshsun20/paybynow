import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import counterSlice from '../slices/CounterSlice'
import cartSlice from '../slices/CartSlice'
import updtcntSlice from '../slices/UpdtCntSlice'


const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  counters: counterSlice,
  carts: cartSlice,
  updtcnts: updtcntSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    prstreduc: persistedReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  }
})

export const persistor = persistStore(store)

