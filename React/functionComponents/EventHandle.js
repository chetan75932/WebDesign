import {useState} from 'react'

export default function Eventhandle()
{
    //destructuring return objects syntax
    let [value,setvalue]=useState("");

    function handler()
    {
        console.log("Hello Ankita");
        setvalue("Hii Aniket")
    }
    return(
        <>
        <input type="button" value="clickMe" onClick={handler}></input>
        <p>{value}</p>
        </>
    )
}