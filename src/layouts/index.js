import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {rhythm} from "../utils/typography";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "../css/style.default.css";
import "../css/animate.css";
import "../css/custom.css";

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    };

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,500,700,800"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>

                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        {name: "description", content: "Sample"},
                        {name: "keywords", content: "sample, something"},
                    ]}
                />

                <Header/>
                            <div>
                                {this.props.children()}
                            </div>
                <Footer/>
            </div>
        );
    }
}
