import React from "react"
import PropTypes from "prop-types"
import {TypographyStyle} from "react-typography"
import typography from "./utils/typography"
export default class HTML extends React.Component {
    static propTypes = {
        body: PropTypes.string,
    };

    render() {
        let css;
        if (process.env.NODE_ENV === "production") {
            css = (
                <style
                    dangerouslySetInnerHTML={{
                        __html: require("!raw!./css/styles.css"),
                    }}
                />
            )
        }

        return (
            <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {this.props.headComponents}
                <TypographyStyle typography={typography}/>
                {css}
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
            </head>
            <body>
            <div
                id="___gatsby"
                dangerouslySetInnerHTML={{__html: this.props.body}}
            />
            {this.props.postBodyComponents}
            <script src="https://code.jquery.com/jquery-3.2.1.min.js" />
            <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
            </body>
            </html>
        )
    }
}