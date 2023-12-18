import {useState} from 'react'
import axios from 'axios'

export default function PromiseAjaxF()
{

       let [firstname,setFName]=useState("click to get");
       let [lastname,setLName]=useState("click to get");
       let [status,setStatus]=useState("Clicked on button")



       function handler()
       {
          let p=axios.get("https://reqres.in/api/users/3");
          console.log(p)
          p.then((response)=>{
                setFName(response.data.data.first_name);
                setLName(response.data.data.last_name);
                setStatus("Success")
          },(reject)=>{
           setStatus("Not found")
          })
       }

        return(
        <>
            <input type="submit" placeholder="click me" onClick={handler}/>
            <p>firstname : {firstname}</p>
            <p>lastname : {lastname}</p>
            <p>status: {status}</p>
        </>
        )
}