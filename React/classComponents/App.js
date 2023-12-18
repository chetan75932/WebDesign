
import './App.css';
import ExternalCssuse from './ExternalCssUse1';
import Hello from './Hello';
import Props from './Props';
import String1 from './string1';
import CaseExample from './CaseExample'
import Lifecyccle from './Lifecyccle';
import { useState,useEffect } from 'react';
import W3lifecycle from './w3lifecycle';
import PromiseAjaxF from './PromisesAjaxF';
import PromiseAjaxC from './PromisesAjaxC';
import PromiseEmp from './PromisesEmp';

function App() {

 


  return (
    <>
      <Hello></Hello>

      {/*passing props to class */}
      {/*<Props name={"Ankita"}></Props>*/}


      {/*use external css here*/}
      {/*<ExternalCssuse color={"blue"}></ExternalCssuse>*/}
      {/*<HalfString></HalfString>*/}



      {/*<String1></String1>*/}
      {/*<CaseExample></CaseExample>*/}
        

      {/*<W3lifecycle></W3lifecycle>*/}

      {/*<PromiseAjaxF></PromiseAjaxF>*/}


      {/*<PromiseAjaxC></PromiseAjaxC>*/}

      <PromiseEmp></PromiseEmp>
      
    </>


  );
}

export default App;
