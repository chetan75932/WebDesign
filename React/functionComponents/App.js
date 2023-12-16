import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Math from './Math';
import { Props } from './Props';
import Icard from './Icard'
import Eventhandle from './EventHandle';
import MonthName from './MonthName';
import Week from './Weeks';

function App() {

  let arr1=[4.3,432,7.53,53.2]
  let obj={name:"chetan",dob:"11-01-2024",Phone:5945665155}
  return (
    <>
    
    {/*just calling of functional components*/}
    <Welcome></Welcome>
    <Greeting></Greeting>
    
    {/*pasing props */ }
    <Math num1={29} num2={30}  op={"/"}></Math>

    {/*passing array as props*/}
    <Props arr={arr1}></Props>

    {/*passing objects as props*/}
    <Icard obj1={obj}></Icard>  

    {/*handling event listerner using fun component*/}
    <Eventhandle></Eventhandle>

    {/* handling using callback handler*/}
    {/*<MonthName></MonthName>*/}

    <Week></Week>
    
    </>
  );
}

export default App;
