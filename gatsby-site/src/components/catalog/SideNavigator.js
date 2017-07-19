import React, {Component} from "react";
import {connect} from "react-redux";
import {catalogActions} from "../../redux_modules/CatalogModule";
import ParentSectionItem from "./ParentSectionItem";


class SideNavigator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getCatalogs();
    }

    render() {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default sidebar-menu">
                    <div className="panel-heading">
                        <h3 className="panel-title">Categories</h3>
                    </div>
                    <div className="panel-body">
                        {
                            this.props.catalogs.map(catalog => {
                              return <ParentSectionItem key={catalog.name} catalog={catalog}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        catalogs: state.catalogs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCatalogs: () => {
            dispatch(catalogActions.getCatalogs());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavigator);