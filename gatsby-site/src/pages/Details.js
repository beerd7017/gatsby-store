import React from "react";
import PropTypes from "prop-types";
import TopNavigator from "../components/common/TopNavigator";
import Breadcrumb from "../components/common/Breadcrumb";
import SideNavigator from "../components/catalog/SideNavigator";
import ProductDetail from "../components/product/ProductDetail";


class Details extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    }

    render() {

        return (
            <div>
                <TopNavigator/>
                <Breadcrumb/>
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <SideNavigator/>
                            <div>
                                <ProductDetail/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;