import React, {Component} from "react";

class LoginModal extends Component {
    render() {
        return (
            <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="Login"
                 aria-hidden="true" style={{zIndex: 1050}}>
                <div className="modal-dialog modal-sm">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="Login">Customer login</h4>
                        </div>
                        <div className="modal-body">
                            <form action="customer-orders.html" method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="email_modal" placeholder="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password_modal"
                                           placeholder="password"/>
                                </div>

                                <p className="text-center">
                                    <button className="btn btn-template-main"><i className="fa fa-sign-in"/> Log in
                                    </button>
                                </p>

                            </form>

                            <p className="text-center text-muted">Not registered yet?</p>
                            <p className="text-center text-muted"><a href="customer-register.html"><strong>Register
                                now</strong></a>! It is easy and done in 1&nbsp;minute and gives you access to special
                                discounts and much more!</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginModal;

