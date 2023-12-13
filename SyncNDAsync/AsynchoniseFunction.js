//Asynchronous Callback Function the execution of callback function
//delayed and runs after the execution of program because it is stored in queue

//ex1
let callback=()=>{console.log("Hii!")};
callback();
let intervalId=setInterval(callback,1000) //set the interval time for process
console.log("Programs ends") 
setTimeout(()=>{clearInterval(intervalId)},8000);