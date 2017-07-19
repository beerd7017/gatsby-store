import ProductApi from "../api/product/ProductApi";
import createReducer from "../utils/createReducer";

const initialState = [];

const productActionTypes = {
    PRODUCTS_RECEIVED: "PRODUCTS_RECEIEVED"
}

const productActions = {
    getProducts: () => {
        return (dispatch) => {
            return ProductApi.getProduct().then(products => {
                dispatch(productActions.productsReceived(products));
            });
        }
    },
    productsReceived: (products) => {
        return {type: productActionTypes.PRODUCTS_RECEIVED, products};
    }
};

const productActionsHandler = {
    [productActionTypes.PRODUCTS_RECEIVED](state, action){
        return action.products;
    }
};

const productReducer = createReducer(initialState, productActionsHandler);

export default productReducer;

export {productActions, productReducer};