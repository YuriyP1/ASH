import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { sectionReducer } from './sectionReducer'
import { storeReducer } from './storeReducer'

const rootReducer = combineReducers({
    section: sectionReducer,
    store: storeReducer
})

const store = configureStore({ reducer: rootReducer })

export default store

// import { persistStore, persistReducer, 
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,} from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


// const rootReducer = combineReducers({ store: storeReducer })

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//  })

// export let persistor = persistStore(store)
// export default store