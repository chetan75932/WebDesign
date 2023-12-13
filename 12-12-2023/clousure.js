let arr=[];

function f1()
{
    
    let i=0;
    let ele=document.getElementById("add-num").value;
    function add_num()
    {
       
        arr[arr.length]=ele;
       // i++;
        //console.log(arr.toString()+" "+ele+" "+i);
        return arr;
    }
    

    
    return add_num;
}




function f2()
{
    let fun=f1();

    let arr=fun();
    //console.log(arr.toString)
    for(let i=0;i<arr.length;i++)
    {
        console.log(i);
        document.getElementById("arr-ele").innerHTML=arr[i];
    }
}