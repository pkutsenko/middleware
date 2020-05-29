import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import currenciesReducer from './currenciesReducer';
import logger from './logger';

const rootReducer = combineReducers({
    currency: currenciesReducer,
});

export default function configureStore() {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk, logger));
    return store;
}