import React, {Component} from "react";
import Link from "gatsby-link";

class LandingPage extends Component{
    constructor(props){
        super(props);
    }



    render() {
        return(
            <section>
                <div className="home-carousel">
                    <div className="dark-mask"></div>
                    <div className="container">
                        <div className="homepage owl-carousel">
                            <div className="item">
                                <div className="row">
                                    <div className="col-sm-5 right">
                                        <p>
                                            <img src="http://placehold.it/187x42" alt=""/>
                                        </p>
                                        <Link to="/store"><h1>Welcome</h1><p>to the product store.</p></Link>

                                        <Link to="/page-2/">Read the TPS Reports</Link>
                                        <br/>
                                        <Link to="/counter/">Go to counter</Link>
                                        <br/>
                                        <Link to="/reduxExample">Go to Redux Example page</Link>
                                        <br/>
                                        <Link to="/store">Go to the store!</Link>
                                    </div>
                                    <div className="col-sm-7">
                                        <img className="img-responsive" src="https://media.makeameme.org/created/Ummm-yeah-Hows.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LandingPage;