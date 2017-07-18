import React, {Component} from "react";
import {connect} from "react-redux";
import {catalogActions} from "../../redux_modules/CatalogModule";


class NavigationItem extends Component {
    constructor(props) {
        super(props);
        this.displayName = this.displayName.bind(this);
    }
    displayName(array) {
        if (typeof(array.subcatagory) !== "undefined") {
            //console.log("calling recursively");
            return array.subcatagory.map(this.displayName);

        } else {
            //console.log("just returning some html");
            return (<ul id="subcat" className="collapse in"><li><a href={array.url}>{array.name}</a></li></ul>);
        }
    }
    render() {
        let catalog = this.props.catalog;
        console.log(catalog.childArray.map(this.displayName));
        return (
            <ul className="nav nav-pills nav-stacked category-menu" id="menu">
                <li>
                    <a href="#" data-toggle="collapse" data-target="#subcat">{catalog.name}<span
                        className="badge pull-right">{catalog.totalProducts}</span></a>
                </li>
                    {
                        catalog.childArray.map(this.displayName)
                    }
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);