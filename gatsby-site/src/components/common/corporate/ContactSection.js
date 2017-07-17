import React, {Component} from "react";

class ContactSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contact = this.props.contact;

        return (
            <p className="hidden-sm hidden-xs">Contact us on {contact.phone} or {contact.emailAddress}</p>
        );
    }
}

export default ContactSection;