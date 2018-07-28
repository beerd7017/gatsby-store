import {applyMiddleware, combineReducers, createStore} from 'redux';
import {corporateReducer} from "../redux_modules/CorporateModule";
import {catalogReducer} from "../redux_modules/CatalogModule";
import {productReducer} from "../redux_modules/ProductModule";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        corporate: corporateReducer,
        catalogs: catalogReducer,
        products: productReducer
    });
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}