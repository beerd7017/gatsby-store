import React from "react";
import PropTypes from "prop-types";

import SideNavigator from "../components/catalog/SideNavigator";
import ProductList from "../components/product/ProductList";

export default class Store extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    }

    render() {
        return (
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <SideNavigator/>

                            <div>
                                <ProductList/>
                            </div>

                        </div>
                    </div>
                </div>
        );
    }
}
