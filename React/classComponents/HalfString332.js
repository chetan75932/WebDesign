import React from "react";

export class HalfString extends React.Component{

    constructor()
    {
        console.log("heloo")
        super()
        this.state={half_string:"not yet enter"}
    }

    handler(event)
    {
        console.log(event.target.value)
        this.setState({half_string:event.target.value})
    }
           
    render(){
        return(
            <div>
            <input type="text" placeholder="type string" onBlur={this.handler}></input>
            <p>{this.state.half_string}</p>
            </div>
        )
    }

}