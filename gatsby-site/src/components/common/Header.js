import React from "react";
import Link from "gatsby-link";


class Header extends React.Component {
    render() {
        return (
            <header>
            <div id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-5 contact">
                            <p className="hidden-sm hidden-xs">Contact us on +420 777 555 333 or
                                hello@rsccorp.radiosys.com.</p>
                            <p className="hidden-md hidden-lg">
                                <a href="#" data-animate-hover="pulse"><i className="fa fa-phone"></i></a>
                                <a href="#" data-animate-hover="pulse"><i className="fa fa-envelope"></i></a>
                            </p>
                        </div>
                        <div className="col-xs-7">
                            <div className="social">
                                <a href="#" className="external facebook" data-animate-hover="pulse"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="external gplus" data-animate-hover="pulse"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="external twitter" data-animate-hover="pulse"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="email" data-animate-hover="pulse"><i className="fa fa-envelope"></i></a>
                            </div>

                            <div className="login">
                                <a href="#" data-toggle="modal" data-target="#login-modal"><i className="fa fa-sign-in"></i>
                                    <span className="hidden-xs text-uppercase">Sign in</span></a>
                                <a href="#"><i className="fa fa-user"></i> <span
                                    className="hidden-xs text-uppercase">Sign up</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
                )
                }
                }

                export default Header