import React, {Component} from "react";
import {connect} from "react-redux";
import {corporateActions} from "../../redux_modules/CorporateModule";
import AboutSection from "./corporate/About";
import Address from "./corporate/Address";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getAbout();
        this.props.getAddress();
    }


    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="col-md-3 col-sm-6">
                        <h4>About Us</h4>
                        {
                            this.props.about.map(about => {
                                return <AboutSection key={about.quotation} about={about}/>
                            })
                        }
                        <hr className="hidden-md hidden-lg hidden-sm"/>
                        <h4>Join our monthly newsletter</h4>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <i className="fa fa-send"/>
                                        </button>
                                    </span>
                            </div>
                        </form>

                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Blog</h4>
                        <div className="blog-entries">
                            <div className="item same-height-row clearfix">
                                <div className="image same-height-always">
                                    <a href="#">
                                        <img className="img-responsive" src="http://placehold.it/500x500" alt=""/>
                                    </a>
                                </div>
                                <div className="name same-height-always">
                                    <h5><a href="#">Blog post name</a></h5>
                                </div>
                            </div>

                            <div className="item same-height-row clearfix">
                                <div className="image same-height-always">
                                    <a href="#">
                                        <img className="img-responsive" src="http://placehold.it/500x500" alt=""/>
                                    </a>
                                </div>
                                <div className="name same-height-always">
                                    <h5><a href="#">Blog post name</a></h5>
                                </div>
                            </div>

                            <div className="item same-height-row clearfix">
                                <div className="image same-height-always">
                                    <a href="#">
                                        <img className="img-responsive" src="http://placehold.it/500x500" alt=""/>
                                    </a>
                                </div>
                                <div className="name same-height-always">
                                    <h5><a href="#">Very very long blog post name</a></h5>
                                </div>
                            </div>
                        </div>

                        <hr className="hidden-md hidden-lg"/>
                    </div>

                    <div className="col-md-3 col-sm-6">

                        <h4>Contact</h4>

                        {
                            this.props.address.map(address => {
                                return <Address key={address.addressee} address={address}/>
                            })
                        }

                        <a href="contact.html" className="btn btn-small btn-template-main">Go to contact page</a>
                        <hr className="hidden-md hidden-lg hidden-sm"/>
                    </div>

                    <div className="col-md-3 col-sm-6">

                        <h4>Photostream</h4>
                        <div className="photostream">
                            <div>
                                <a href="#">
                                    <img src="https://www.fillmurray.com/g/500/500" className="img-responsive" alt="#"/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="http://placecage.com/g/500/500" className="img-responsive" alt="#"/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="https://www.fillmurray.com/g/500/500" className="img-responsive" alt="#"/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="http://placecage.com/g/500/500" className="img-responsive" alt="#"/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="https://www.fillmurray.com/g/500/500" className="img-responsive" alt="#"/>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="http://placecage.com/g/500/500" className="img-responsive" alt="#"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

function mapStateToProps(state) {
    return {
        about: state.corporate.about,
        address: state.corporate.address,
        phone: state.corporate.phone,
        email: state.corporate.email
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAbout: () => {
            dispatch(corporateActions.getAbout());
        },
        getAddress: () => {
            dispatch(corporateActions.getAddress());
        },
        getPhoneNum: () => {
            dispatch(corporateActions.getPhoneNum());
        },
        getEmailAddr: () => {
            dispatch(corporateActions.getEmailAddr());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);