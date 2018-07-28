import React, {Component} from "react";

class Address extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let address = this.props.address;
        return (
        <p><strong>{address.addressee}</strong>
            <br />{address.addrLine1}
            <br />{address.city}, {address.state}
            <br /><strong>{address.country}</strong>
        </p>
        );
    }
}

export default Address;