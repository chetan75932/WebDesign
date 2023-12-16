
//props introduce
export default function Math(props)
{


    //`<h1>"${props.num1}+"="+"${props.num2}"+"="${props.num1}+${props.num2}</h1>`
    let op=props.op;

    let result="";

    switch(op)
    {
        case '+':
            result=props.num1+props.num2;
        break;

        case '-':
            result=props.num1-props.num2
        break;

        case '*':
            result=props.num1*props.num2;
        break;

        case '/':
            result=props.num1/props.num2;
        break;

        default:
            result=`<h1>Invalid Choice</h1>`
            break;

    }

    return(
        <>
        <h1>result is:{result}</h1>     
        </>
    )
}