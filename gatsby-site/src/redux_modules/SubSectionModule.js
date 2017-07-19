import SubSectionAPI from "../api/catalog/SubSectionAPI";
import createReducer from "../utils/createReducer";

const initialState = [];

const subSectionActionTypes = {
    SUBSECTION_RECEIVED: "SUBSECTION_RECEIVED"
};

const subSectionActions = {
    getSubSections: () => {
        return(dispatch) => {
            return SubSectionAPI.getSubSection().then(subSections =>{
                dispatch(subSectionActions.subSectionReceived(subSections));
            });
        }
    },
    subSectionReceived: (subSections) => {
        return { type: subSectionActionTypes.SUBSECTION_RECEIVED, subSections};
    }
};

const subSectionActionsHandler = {
    [subSectionActionTypes.SUBSECTION_RECEIVED](state, action){
        return action.subSections;
    }
};

const  subSectionReducer = createReducer(initialState, subSectionActionsHandler);

export default subSectionReducer;

export {subSectionActions, subSectionReducer};