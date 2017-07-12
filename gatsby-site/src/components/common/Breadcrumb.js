import React, {Component} from "react";
import Link from "gatsby-link"

class Breadcrumb extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="heading-breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1>Fountains</h1>
                        </div>
                        <div className="col-md-5">
                            <ul className="breadcrumb">
                                <Link to="/">Home/ </Link>

                                <li>Fountains</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;