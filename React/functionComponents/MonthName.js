import useState from 'react'

export default function MonthName(){

    let[month,setmonth] = useState("Not Selected")
    let monarr=["jan","feb","march","april"]
    //let month_name="not selected"
    function handler(event)
    {
        let idx=parseInt(event.target.value);
        console.log(monarr[idx-1]);
        setmonth("january");

        console.log(event.target.value)
    }

    return(
        <>
        <select onChange={handler}>
                <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
        <p>Monthname: {month}</p>
        </>
    )
}