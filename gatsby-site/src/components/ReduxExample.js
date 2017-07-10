import React, {Component} from 'react';

class ReduxExample extends Component {
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(){
        this.props.getThings();
    }
    render() {
        return (
            <div>
                <h2>This is a Redux example in Gatsby, click the button below to see Redux in action</h2>
                <br/>
                <button onClick={this.handleButtonClick}>Get API Things</button>
                <br/>
                <br/>
                <div>
                    <ul>
                        {
                            this.props.things.length < 1 ?
                            <li>No Things to List</li>:
                            this.props.things.map((thing, index) => {
                                return <li key={index}>{thing.name}</li>
                            }) 
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ReduxExample;