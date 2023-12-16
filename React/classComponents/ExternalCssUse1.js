import r from "react"
import './ExternalCssuse.css'

export default class ExternalCssuse extends r.Component{
        render(){
            return(
            <h1 className="text-color" style={{color:this.props.color}}>Ankitaa</h1>
            )
        }
}