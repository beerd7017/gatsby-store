import React, {Component} from "react";
import {connect} from "react-redux";
import {productActions} from "../../redux_modules/ProductModule";
import Description from "./item/Description";

class ItemDetail extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getProducts();
    }

    render(){
        return (

            <div className="col-md-9">


                <Description/>


                <p className="goToDescription"><a href="#details" className="scroll-to text-uppercase">Scroll to product details, material & care and sizing</a>
                </p>

                <div className="row" id="productMain">
                    <div className="col-sm-6">
                        <div id="mainImage">
                            <img src="http://via.placeholder.com/410x615" alt="" className="img-responsive"/>
                        </div>

                        <div className="ribbon sale">
                            <div className="theribbon">SALE</div>
                            <div className="ribbon-background"/>
                        </div>

                        <div className="ribbon new">
                            <div className="theribbon">NEW</div>
                            <div className="ribbon-background"/>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <div className="box">

                            <form>
                                <div className="sizes">

                                    <h3>Available sizes</h3>

                                    <label for="size_s">
                                        <a href="#">S</a>
                                        <input type="radio" id="size_s" name="size" value="s" className="size-input"/>
                                    </label>
                                    <label for="size_m">
                                        <a href="#">M</a>
                                        <input type="radio" id="size_m" name="size" value="m" className="size-input"/>
                                    </label>
                                    <label for="size_l">
                                        <a href="#">L</a>
                                        <input type="radio" id="size_l" name="size" value="l" className="size-input"/>
                                    </label>

                                </div>

                                <p className="price">$124.00</p>

                                <p className="text-center">
                                    <button type="submit" className="btn btn-template-main"><i className="fa fa-shopping-cart"/> Add to cart</button>
                                    <button type="submit" className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o"/>
                                    </button>
                                </p>


                            </form>
                        </div>

                        <div className="row" id="thumbs">
                            <div className="col-xs-4">
                                <a href="/" className="thumb">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="img-responsive"/>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="/" className="thumb">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="img-responsive"/>
                                </a>
                            </div>
                            <div className="col-xs-4">
                                <a href="/" className="thumb">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="img-responsive"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        )};
}

function mapStateToProps(state){
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        getProducts: () => {
            dispatch(productActions.getProducts());
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ItemDetail);