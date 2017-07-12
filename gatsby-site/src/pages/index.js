import React from "react";
import Link from "gatsby-link";

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>
                <br/>
                <Link to="/counter/">Go to counter</Link>
                <br/>
                <Link to="/reduxExample">Go to Redux Example page</Link>
            </div>
        );
    }
}
