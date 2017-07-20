import React, {Component} from "react";

function myFunction(element) {

    return <li><a href="/">{element}</a></li>;
}

class ParentSectionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let catalog = this.props.catalog;

        return (
            <ul className="nav nav-pills nav-stacked category-menu" id="menu">
                <li>
                    <a href="#" data-toggle="collapse" data-target="#Doors">{catalog.name}<span
                        className="badge pull-right">{catalog.totalProducts}</span></a>
                </li>
                <ul id={catalog.name} className="collapse in">
                    {catalog.subSections.map(myFunction)}
                </ul>
            </ul>
        );
    }
}

export default ParentSectionItem;