import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thingsReducer} from "../redux_modules/ThingsModule";
import thunk from "redux-thunk";


export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        things: thingsReducer
    });
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}