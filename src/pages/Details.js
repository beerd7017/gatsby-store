import React from "react";
import PropTypes from "prop-types";
import TopNavigator from "../components/common/TopNavigator";
import Breadcrumb from "../components/common/Breadcrumb";
import SideNavigator from "../components/catalog/SideNavigator";
import ItemDetail from "../components/product/ItemDetail";

class Details extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    };

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
                                <ItemDetail/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;