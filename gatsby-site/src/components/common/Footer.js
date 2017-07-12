import React from "react"

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="col-md-3 col-sm-6">
                        <h4>About us</h4>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.</p>
                        <hr className="hidden-md hidden-lg hidden-sm" />
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

                        <hr className="hidden-md hidden-lg" />
                    </div>

                    <div className="col-md-3 col-sm-6">

                        <h4>Contact</h4>

                        <p><strong>Universal Ltd.</strong>
                            <br />13/25 New Avenue
                            <br />Newtown upon River
                            <br />45Y 73J
                            <br />England
                            <br /><strong>Great Britain</strong>
                        </p>

                        <a href="contact.html" className="btn btn-small btn-template-main">Go to contact page</a>
                        <hr className="hidden-md hidden-lg hidden-sm" />
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

export default Footer;