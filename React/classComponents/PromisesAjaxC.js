import React from 'react'
import axios from 'axios'
export default class PromiseAjaxC extends React.Component{


    constructor()
    {
        super();
        this.state={arr:[],objectss:null}
    }


    componentDidMount()
    {
        let p=axios.get("https://reqres.in/api/users?page=2")
        p.then((res)=>{
            this.setState({arr:res.data.data})
        })
    }


    getOption=()=>{
        return this.state.arr.map((element)=>{
                return <option key={element.id} value={element.id} >{element.first_name}</option>
        })
    }


    handler=(e)=>{
       let selectId=e.target.value;

       let objj=this.state.arr.find((ele)=>{
            if(selectId == ele.id)
                return true;
            else
              return false;
       })

       this.setState({objectss:objj})
    }

    render()
    {
        return(
            <>
            <select onChange={this.handler}>

                <option>Select User</option>
                {this.getOption()}
            </select>


            <p>ID: {this.state.objectss?.id}</p>
            <p>Email: {this.state.objectss?.email}</p>
            </>

        )
    }

}