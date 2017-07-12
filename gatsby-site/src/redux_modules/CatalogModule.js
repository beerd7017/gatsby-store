import CatalogApi from "../api/catalog/CatalogApi";
import createReducer from "../utils/createReducer";

const initialState = [];

const catalogActionTypes = {
    CATALOG_RECEIVED: "CATALOG_RECEIVED"
};

const catalogActions = {
    getCatalogs: () => {
        return (dispatch) => {
            return CatalogApi.getCatalog().then(catalogs => {
                dispatch(catalogActions.catalogReceived(catalogs));
            });
        }
    },
    catalogReceived: (catalogs) => {
        return {type: catalogActionTypes.CATALOG_RECEIVED, catalogs};
    }
};

const catalogActionsHandler = {
    [catalogActionTypes.CATALOG_RECEIVED](state, action){
        return action.catalogs;
    }
};

const catalogReducer = createReducer(initialState, catalogActionsHandler);

export default catalogReducer;

export {catalogActions, catalogReducer};