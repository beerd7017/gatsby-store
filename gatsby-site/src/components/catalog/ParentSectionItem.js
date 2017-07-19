import React, {Component} from "react";

class ParentSectionItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let catalog = this.props.catalog;
        console.log(catalog.subSections);

        return (
            <ul className="nav nav-pills nav-stacked category-menu" id="menu">
                <li>
                    <a href="#" data-toggle="collapse" data-target="#Doors">{catalog.name}<span
                        className="badge pull-right">{catalog.totalProducts}</span></a>
                </li>
                <ul id="#" className="collapse in">

                    <li><a href="/">{catalog.subSections}</a></li>
                </ul>
            </ul>
        );
    }
}


export default ParentSectionItem;