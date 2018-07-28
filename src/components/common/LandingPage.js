import React, {Component} from "react";
import Link from "gatsby-link";
import logo from "../../img/logo.png";
import hero from "../../img/template-homepage.png";

class LandingPage extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <div className="navbar-affixed-top" data-spy="affix" data-offset-top="200">
                    <div className="navbar navbar-default yamm" role="navigation" id="navbar">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand home" href="index.html">
                                    <img src={logo} alt="RSC logo" className="hidden-xs hidden-sm"/>
                                    <img src={logo} alt="RSC logo" className="visible-xs visible-sm"/><span
                                    className="sr-only">RSC - go to homepage</span>
                                </a>

                            </div>
                            <div className="navbar-collapse collapse" id="navigation">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown use-yamm yamm-fw">
                                        <Link to="/brands/">Brands</Link>
                                    </li>
                                    <li className="dropdown use-yamm yamm-fw">
                                        <Link to="/about/">About Us</Link>
                                    </li>
                                    <li className="dropdown use-yamm yamm-fw">
                                        <Link to="/partners/">Partners</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-carousel">
                    <div className="dark-mask"></div>
                    <div className="container">
                        <div className="homepage owl-carousel">
                            <div className="item">
                                <div className="row">
                                    <div className="col-sm-5 right">
                                        <Link to="/store"><h1>The most trusted pet brands.</h1></Link>
                                    </div>
                                    <div className="col-sm-7">
                                        <Link to="/store"><img className="img-responsive" src={hero} alt=""/></Link>
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