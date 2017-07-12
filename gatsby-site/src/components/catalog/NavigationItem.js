import React, {Component} from "react";

class NavigationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let catalog = this.props.catalog;
        return (
            <ul className="nav nav-pills nav-stacked category-menu" id="menu">
                <li>
                    <a href="#">{catalog.name}<span className="badge pull-right">{catalog.totalProducts}</span></a>
                </li>
                <ul>
                    <li><a href="#">Small Dog</a></li>
                    <li><a href="#">Big Dog</a></li>
                </ul>
            </ul>
        );
    }
}

export default NavigationItem;