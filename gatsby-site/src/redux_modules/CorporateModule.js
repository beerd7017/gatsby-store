import CorporateApi from "../api/corporate/CorporateApi"
import createReducer from "../utils/createReducer"

const initialState = [];

const corporateActionTypes = {
    ABOUT_RECEIVED: "ABOUT_RECEIVED",
    ADDRESS_RECEIVED: "ADDRESS_RECEIVED",
    PHONENUM_RECEIVED: "PHONENUM_RECEIVED",
    EMAILADDR_RECEIVED: "EMAILADDR_RECEIVED"
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

    getPhoneNum: () => {
        return (dispatch) => {
            return CorporateApi.getPhone().then(phone => {
                dispatch(corporateActions.phoneReceived(phone));
            });
        }
    },
    phoneReceived: (phone) => {
        return {type: corporateActionTypes.PHONENUM_RECEIVED, phone};
    },

    getEmailAddr: () => {
        return (dispatch) => {
            return CorporateApi.getEmail().then(email => {
                dispatch(corporateActions.emailAddrReceived(email));
            });
        }
    },
    emailAddrReceived: (email) => {
        return {type: corporateActionTypes.EMAILADDR_RECEIVED, email};
    }
};

const corporateActionsHandler = {
    [corporateActionTypes.ABOUT_RECEIVED](state, action){
        return action.about;
    },
    [corporateActionTypes.ADDRESS_RECEIVED](state, action){
        return action.address;
    },
    [corporateActionTypes.PHONENUM_RECEIVED](state, action){
        return action.phone;
    },
    [corporateActionTypes.EMAILADDR_RECEIVED](state, action){
        return action.email;
    }
};

const corporateReducer = createReducer(initialState, corporateActionsHandler);

export default corporateReducer;

export {corporateActions, corporateReducer};