//class component
//function component

import React from "react";

class MyComponent extends React.Component{

    state = {
        name: 'Roy hung',
        address: 'Ha Noi',
        age: '22',

    };

    handleClick(){
        console.log(">>> Click me my button")
        console.log("My name is ", this.state.name)
    }

    handleOnMoverOver(event){
        // console.log(">>> Click me my button")
        console.log(window.event.pageX)
    }


    //JSX: The special syntax of React is JSX, which allows us to write JavaScript inside HTML-like code.
    render(){
        return(

            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                {/* <button onClick={this.handleClick}>Click me!</button> */}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>

                <button onClick={this.handleClick}>Click me!</button>

            </div>
        );
    }
}

export default MyComponent;