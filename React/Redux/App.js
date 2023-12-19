import logo from './logo.svg';
import './App.css';
import IncrC1 from './IncrC1';
import { Provider } from 'react-redux';
import ReduxStorage from './ReduxStorage'
import DecrC1 from './DecrC1';
import C3 from './C3';

function App() {
  return (
    <>
    <h1>Heloooooo</h1>
    <Provider store={ReduxStorage}>
    <IncrC1></IncrC1>
    <DecrC1></DecrC1>
    <C3></C3>
    </Provider>
    </>
  );
}

export default App;
