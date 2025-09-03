//class component
//function component

import React from "react";

class MyComponent extends React.Component{

    state = {
        name: 'Roy hung',
        address: 'Ha Noi',
        age: '22',

    };

    //JSX: The special syntax of React is JSX, which allows us to write JavaScript inside HTML-like code.
    render(){
        return(

            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;