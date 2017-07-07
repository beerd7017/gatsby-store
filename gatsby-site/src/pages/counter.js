import React from "react";
import Link from "gatsby-link"
class Counter extends React.Component {
    constructor(){
        super()
        this.state = { count: 0 }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <button>plus</button>
                <button>minus</button>
                <Link to="/">Go back to the homepage</Link>
            </div>
        )
    }
}

export default Counter
