import React, {Component} from "react";
import {connect} from "react-redux";
import {thingsActions} from "../redux_modules/ThingsModule";
import ReduxExample from "../components/ReduxExample";

function mapStateToProps(state){
    return {
        things: state.things
    }
}

function mapDispatchToProps(dispatch){
    return {
        getThings: () => {
            dispatch(thingsActions.getThings());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);