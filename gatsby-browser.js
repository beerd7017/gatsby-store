import React from "react";
import {Provider} from "react-redux";
import configureStore from "./src/store/configureStore";

exports.wrapRootComponent = Root => {
    let store = configureStore({});
    return () => (
        <Provider store={store}>
            <Root.Root />
        </Provider>
    );
};