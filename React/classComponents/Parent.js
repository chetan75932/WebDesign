import Child from "./Child"
import { useState } from "react";

export default function Parent(){
        let [arr,setArr]=useState(["Premium","Delax","SuperDelaux"]);

       function addToArray(data)
       {
          setArr([...arr,data])
       }

        return(
        
            <div>
                <ol>
                    {arr.map((ele,index)=>{
                        return <li key={index}>{ele}</li>
                    })}
                </ol>

                <Child add={addToArray}></Child>
            </div>
    )       
}