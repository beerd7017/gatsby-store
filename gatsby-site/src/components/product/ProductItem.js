import React, {Component} from "react";

class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let product = this.props.product;
        return (
            <div className="col-md-4 col-sm-6">
                <div className="product">
                    <div className="image">
                        <img src={product.image}/>
                    </div>
                    <div className="text">
                        <h3><a href="/details">{product.name}</a></h3>
                        <p className="text-muted">{product.sku}</p>
                        <p className="price">{product.price}</p>
                        <a href="#" className="btn btn-template-main"><i className="fa fa-shopping-cart"/>Add to
                            cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;