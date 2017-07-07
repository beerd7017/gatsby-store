import React from "react";

class Counter extends React.Component {
    constructor(){
        super()
        this.state = { count: 0 }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: 0</p>
                <button>plus</button>
                <button>minux</button>
            </div>
        )
    }
}

export default Counter
