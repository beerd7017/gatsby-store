import React from "react";
import {connect} from "react-redux";
import {productActions} from "../../redux_modules/ProductModule";
import ProductItem from "./ProductItem";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }


    render() {
        return (
            <div className="col-sm-9">
                <p className="text-muted lead">Fountains keep your pet healthy and hydrated with fresh, filtered,
                    circulating water.</p>
                <div className="row products">

                    {
                        this.props.products.map(product => {
                            return <ProductItem key={product.name} product={product}/>
                        })
                    }

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => {
            dispatch(productActions.getProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
