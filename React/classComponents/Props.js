import react from 'react';

export default class Props extends react.Component{

    render(){
        return(
            <h1>{this.props.name}</h1>
        )
    }
}