export default function Child(props)
{
    let  data="BLANK VALUE"

    return(
        <>
        <input type="text" placeholder="Enter value" onBlur={(e)=>{
            data=e.target.value;
        }}/>

        <input type="submit" value="add in array" onClick={()=>{
            props.add(data)
        }}/>
        </>
    )
}