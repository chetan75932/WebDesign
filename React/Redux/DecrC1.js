import {useDispatch,useSelector} from 'react-redux'

export default function DecrC1()
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
        dispatcher({type:"DECR"})
    }
    return(
        <div>
           
            <p>counter: {count}</p>
            <input type="button" value="--" onClick={handler}/>
        </div>
    )
}