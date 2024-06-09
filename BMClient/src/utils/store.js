import { combineReducers, configureStore } from "@reduxjs/toolkit";
import groupReducer from './reducer';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { useSelector } from "react-redux";

const rootReducers = combineReducers({
    groupReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

export const useAppSelector = useSelector;