import React from "react";

class AppClassComponent extends React.Component {
    constructor(){
        console.log("Constructor") //1

        super();
        this.state=
        {
            name: "Rehab",
            position:"Full stack Developer"
        };
    }

    componentDidMount(){  //3
        console.log("DID MOUNT")
    }
    componentDidUpdate(){
        console.log("UPDATED")
    }
    componentWillUnmount(){
        console.log("DESTROY")
    }

    render(){ //2
        console.log("RENDERED")
        return( 
        <> 
        <h1>Hello from class Component</h1>
       <h2> username: {this.state.name}</h2>
        </>
        );
    }
}

export default AppClassComponent;