import React, {Component} from "react";

class SideNavigator extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default sidebar-menu">
                    <div className="panel-heading">
                        <h3 className="panel-title">Categories</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="nav nav-pills nav-stacked category-menu">
                            <li>
                                <a href="#">Fountains<span className="badge pull-right">14</span></a>
                            </li>
                            <ul>
                                <li><a href="#">Small Dog</a></li>
                                <li><a href="#">Big Dog</a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNavigator;