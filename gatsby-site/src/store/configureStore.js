import {createStore, applyMiddleware, combineReducers} from 'redux';
import {catalogReducer} from "../redux_modules/CatalogModule";
import thunk from "redux-thunk";


export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        catalogs: catalogReducer
    });
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}