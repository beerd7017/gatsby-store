import React, {Component} from "react";
import logo from "../../img/logo.png";

class TopNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-affixed-top" data-spy="affix" data-offset-top="200">
                <div className="navbar navbar-default yamm" role="navigation" id="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand home" href="/">
                                <img src={logo} alt="RSC logo" className="hidden-xs hidden-sm"/>
                                <img src={logo} alt="RSC logo" className="visible-xs visible-sm"/><span
                                className="sr-only">RSC - go to homepage</span>
                            </a>
                            <div className="navbar-buttons">
                                <button type="button" className="navbar-toggle btn-template-main" data-toggle="collapse"
                                        data-target="#navigation">
                                    <span className="sr-only">Toggle navigation</span>
                                    <i className="fa fa-align-justify"/>
                                </button>
                            </div>
                        </div>

                        <div className="navbar-collapse collapse" id="navigation">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown use-yamm yamm-fw">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Orders<b
                                        className="caret"/></a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="yamm-content">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <i className="fa fa-barcode fa-5x" aria-hidden="true"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>Order History</h5>
                                                        <ul>
                                                            <li><a href="../index.html">30 Days</a></li>
                                                            <li><a href="../index.html">60 Days</a></li>
                                                            <li><a href="../index.html">90 Days</a></li>
                                                            <li><a href="../index.html">All Orders</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown use-yamm yamm-fw">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Invoices<b
                                        className="caret"/></a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="yamm-content">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <i className="fa fa-list fa-5x" aria-hidden="true"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>Invoice History</h5>
                                                        <ul>
                                                            <li><a href="../index.html">30 Days</a></li>
                                                            <li><a href="../index.html">60 Days</a></li>
                                                            <li><a href="../index.html">90 Days</a></li>
                                                            <li><a href="../index.html">All Invoices</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown use-yamm yamm-fw">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Payments<b
                                        className="caret"/></a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="yamm-content">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <i className="fa fa-credit-card fa-5x" aria-hidden="true"/>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>Payment History</h5>
                                                        <ul>
                                                            <li><a href="../index.html">30 Days</a></li>
                                                            <li><a href="../index.html">60 Days</a></li>
                                                            <li><a href="../index.html">90 Days</a></li>
                                                            <li><a href="../index.html">All Payments</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown active">
                                    <a href="#" className="snipcart-checkout">
                                        View cart (<span className="snipcart-total-items">0</span>)
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse clearfix" id="search">

                            <form className="navbar-form" role="search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-template-main"><i className="fa fa-search"/></button>
                </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TopNavigator;