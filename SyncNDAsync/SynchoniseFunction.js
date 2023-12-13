//callback function:- we define the callback function but we may
//not call it somebody else will call it.


//Synchronous Callback function is a function which is pass to another function 
//and it is called by the function.it is sequentially executed.


//ex-1
let arr=[3,544,65,785464,334,2,5454]
//fat function is a synchronous callback function
var ans="";
//return undefined
arr.forEach((element)=>{ ans+=(element+" ")});
console.log(ans);

//ex-2
//*Map returns any[] array
//let squares = arr.map((element) => {return element*element});
let squares = arr.map((element) => {return Math.pow(element,2)});
console.log(squares);


//ex-3
//*filter returns number[] array but work on predicate(True|False)
let divisibleBy4=arr.filter((element)=>{
    if(element%4==0)
        return true;
    else
        return false;
})
console.log(divisibleBy4);
