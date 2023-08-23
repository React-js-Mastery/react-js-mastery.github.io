import React, { Component } from "react";

class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increase = () =>{
        this.setState(a=>({
            count: a.count + 1,
        }))
    }

    decrease = () => {
        this.setState(a=>({
            count: a.count - 1,
        }))
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
}
export default CounterClass;