import React, {Component} from "react";

function appendCatName(name) {
    return "#" + name;
}

function listSubsections(subSects) {

    return <li><a href="/">{subSects}</a></li>;
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
                    <a href="#" data-toggle="collapse" data-target={appendCatName(catalog.sectionId)}>{catalog.name}<span
                        className="badge pull-right">{catalog.totalProducts}</span></a>
                </li>
                <ul id={catalog.sectionId} className="collapse">
                    {catalog.subSections.map(listSubsections)}
                </ul>
            </ul>
        );
    }
}

export default ParentSectionItem;