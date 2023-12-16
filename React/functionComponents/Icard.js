export default function Icard(probs)
{
    let {name,dob,phone}=probs.obj1;
    let styleObj = {border:"2px dotted red",height:"200px",width:"200px",backgroundColor:"pink",color:"#654321"}
    return (
        <div style={styleObj}>
          <p>name:{name}</p>
          <br/>
          <p>Dob:{dob}</p>
          <br/>
          <p>Phone:{phone}</p>
        </div>
    )

    
}