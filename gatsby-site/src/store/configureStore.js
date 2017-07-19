import {createStore, applyMiddleware, combineReducers} from 'redux';
import {corporateReducer} from "../redux_modules/CorporateModule";
import {catalogReducer} from "../redux_modules/CatalogModule";
import {subSectionReducer} from "../redux_modules/SubSectionModule";
import {productReducer} from "../redux_modules/ProductModule";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const rootReducer = combineReducers({
        corporate: corporateReducer,
        catalogs: catalogReducer,
        subSecitons: subSectionReducer,
        products: productReducer
    });
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}