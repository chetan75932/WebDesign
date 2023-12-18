import React from 'react'





export default class Lifecyccle extends React.Component
{
        componentDidMount()
        {
            console.log("Life cycle component mounted");
        }

        componentDidUpdate()
        {
            console.log("Life cycle component updated");
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

}