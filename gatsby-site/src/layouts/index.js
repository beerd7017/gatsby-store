import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import {rhythm} from "../utils/typography"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer";

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        {name: "description", content: "Sample"},
                        {name: "keywords", content: "sample, something"},
                    ]}

                    link={[
                        {href: "http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,500,700,800", rel:"stylesheet' type='text/css"},
                        {/*Bootstrapp and FontAwesome css*/},
                        {href:"http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", rel:"stylesheet"},
                        {href:"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css", rel:"stylesheet"},

                    ]}

                        />
                <div
                    style={{
                        background: `rebeccapurple`,
                        marginBottom: rhythm(1),
                    }}
                >
                    <div
                        style={{
                            margin: `0 auto`,
                            maxWidth: 960,
                            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                        }}
                    >
                        <h1 style={{margin: 0}}>
                            <Link
                                to="/"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Gatsby
                            </Link>
                        </h1>
                    </div>
                </div>

                <Header/>

                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
                        paddingTop: 0,
                    }}
                >
                    {this.props.children()}
                </div>
                <Footer/>
            </div>
        )
    }
}
