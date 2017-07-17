import React, {Component} from "react";
import {connect} from "react-redux";
import {corporateActions} from "../../redux_modules/CorporateModule";
import LoginModal from "./authentication/LoginModal";
import ContactSection from "./corporate/ContactSection";

class Header extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getContact();
    }


    render() {
        return (
            <div>
                <header>
                    <div id="top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 contact">
                                    {
                                        this.props.contact.map(contact => {
                                            return <ContactSection key={contact.phone} contact={contact}/>
                                        })
                                    }

                                    <p className="hidden-md hidden-lg">
                                        <a href="#" data-animate-hover="pulse"><i className="fa fa-phone"/></a>
                                        <a href="#" data-animate-hover="pulse"><i className="fa fa-envelope"/></a>
                                    </p>
                                </div>
                                <div className="col-xs-7">
                                    <div className="social">
                                        <a href="#" className="external facebook" data-animate-hover="pulse"><i className="fa fa-facebook"/></a>
                                        <a href="#" className="external gplus" data-animate-hover="pulse"><i className="fa fa-google-plus"/></a>
                                        <a href="#" className="external twitter" data-animate-hover="pulse"><i className="fa fa-twitter"/></a>
                                        <a href="#" className="email" data-animate-hover="pulse"><i className="fa fa-envelope"/></a>
                                    </div>

                                    <div className="login">
                                        <a href="#" data-toggle="modal" data-target="#login-modal"><i className="fa fa-sign-in"/>
                                            <span className="hidden-xs text-uppercase">Sign in</span></a>
                                        <a href="#"><i className="fa fa-user"/> <span
                                            className="hidden-xs text-uppercase">Sign up</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <LoginModal/>
            </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        contact: state.corporate.contact
    }
}

function mapDispatchToProps(dispatch){
    return {
        getContact: () => {
            dispatch(corporateActions.getContact());
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Header);