import CorporateApi from "../api/corporate/CorporateApi"
import createReducer from "../utils/createReducer"

const initialState = {about:[], address:[], contact:[]};

const corporateActionTypes = {
    ABOUT_RECEIVED: "ABOUT_RECEIVED",
    ADDRESS_RECEIVED: "ADDRESS_RECEIVED",
    CONTACT_RECEIVED: "CONTACT_RECEIVED"
};

const corporateActions = {
    getAbout: () => {
        return (dispatch) => {
            return CorporateApi.getAbout().then(about => {
                dispatch(corporateActions.aboutReceived(about));
            });
        }
    },
    aboutReceived: (about) => {
        return {type: corporateActionTypes.ABOUT_RECEIVED, about};
    },

    getAddress: () => {
        return (dispatch) => {
            return CorporateApi.getAddress().then(address => {
                dispatch(corporateActions.addressReceived(address));
            });
        }
    },
    addressReceived: (address) => {
        return {type: corporateActionTypes.ADDRESS_RECEIVED, address};
    },

    getContact: () => {
        return (dispatch) => {
            return CorporateApi.getContact().then(contact => {
                dispatch(corporateActions.contactReceived(contact));
            });
        }
    },
    contactReceived: (contact) => {
        return {type: corporateActionTypes.CONTACT_RECEIVED, contact};
    }
};

const corporateActionsHandler = {
    [   corporateActionTypes.ABOUT_RECEIVED](state, action){
        let newState = Object.assign({}, state);
        newState.about=action.about;
        return newState;
    },
    [corporateActionTypes.ADDRESS_RECEIVED](state, action){
        let newState = Object.assign({}, state);
        newState.address=action.address;
        return newState;
    },
    [corporateActionTypes.CONTACT_RECEIVED](state, action){
        let newState = Object.assign({}, state);
        newState.contact=action.contact;
        return newState;
    }
};

const corporateReducer = createReducer(initialState, corporateActionsHandler);

export default corporateReducer;

export {corporateActions, corporateReducer};