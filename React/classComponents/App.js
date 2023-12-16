
import './App.css';
import ExternalCssuse from './ExternalCssUse1';
import Hello from './Hello';
import Props from './Props';
import String1 from './string1';


function App() {
  return (
    <>
      <Hello></Hello>

      {/*passing props to class */}
      <Props name={"Ankita"}></Props>


      {/*use external css here*/}
      <ExternalCssuse color={"blue"}></ExternalCssuse>
      {/*<HalfString></HalfString>*/}



      <String1></String1>
      
      </>
  );
}

export default App;
