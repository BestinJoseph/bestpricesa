// import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from '@redux-devtools/extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from '../reducers'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))

export const persistor = persistStore(store)