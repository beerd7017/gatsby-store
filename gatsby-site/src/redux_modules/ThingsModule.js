import ThingsApi from "../api/ThingsApi";
import createReducer from "../utils/createReducer";

const initialState = [];

const thingActionTypes = {
    THINGS_UPDATED: "THINGS_UPDATED"
};

const thingsActions = {
    getThings: () => {
        return (dispatch) => {
            return ThingsApi.getThings().then(things => {
                dispatch(thingsActions.thingsUpdated(things));
            });
        }
    },
    thingsUpdated: (things) => {
        return {type: thingActionTypes.THINGS_UPDATED, things};
    }
};

const thingActionsHandler = {
    [thingActionTypes.THINGS_UPDATED](state, action){
        return action.things;
    }
}

const thingsReducer = createReducer(initialState, thingActionsHandler);

export default thingsReducer;

export {thingsActions, thingsReducer};