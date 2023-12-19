import {useDispatch,useSelector} from 'react-redux'

export default function IncrC1()
{


    let dispatcher=useDispatch();
    let count=useSelector((state)=>{
        return state.counter
    })

    let arr=useSelector((state)=>{
        return state.arr
    })

    function handler()
    {
        dispatcher({type:"INCR"})
    }
    return(
        <div>
            <ol>
                {arr.map((ele,index)=>{
                    return <li key={index}>{ele}</li>
                })}
            </ol>
            <p>counter: {count}</p>
            <input type="button" value="++" onClick={handler}/>
        </div>
    )
}