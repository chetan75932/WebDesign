export function Props(propss){
    let arr=propss.arr;
    let sum=0;


    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }


    return(
        <h1>Sum is:{sum}</h1>
    )
}

