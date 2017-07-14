import {createStore, applyMiddleware, combineReducers} from 'redux';
import {catalogReducer} from "../redux_modules/CatalogModule";
import {productReducer} from "../redux_modules/ProductModule";
import {corporateReducer} from "../redux_modules/CorporateModule";
import thunk from "redux-thunk";


export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        catalogs: catalogReducer,
        products: productReducer,
        corporate: corporateReducer
    });
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}