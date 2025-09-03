//class component
//function component

import React from "react";

class MyComponent extends React.Component{
    //JSX: The special syntax of React is JSX, which allows us to write JavaScript inside HTML-like code.
    render(){
        return(

            <div>
                My first component

                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;