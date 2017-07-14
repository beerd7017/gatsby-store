import React, {Component} from "react";

class Address extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let address = this.props.address;
        return (
        <p><strong>{address.addressee}</strong></p>

        );
    }
}

export default Address;