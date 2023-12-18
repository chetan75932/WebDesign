import React from 'react'


export default class w3lifecycle extends React.Component {


    componentDidMount()
        {
            console.log("Life cycle component mounted");
        }

        

        componentWillUnmount()
        {
            console.log("Life cycle Component unmounted");
        }

        render()
        {
            return(
                <p>{this.state}</p>
            )
        }




    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {

    console.log("Life cycle component updated");
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      ); 
    }
  }