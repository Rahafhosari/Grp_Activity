import logo from './logo.svg';
import './App.css';
import Sum from './components/Sum';
import Multiplication from './components/Multiplication';


function App() {
  return (
    <div className="App">
      <Sum x={2} y={3}/>
      {/* <hr></hr>
      <Multiplication /> */}
    </div>
  );
}

export default App;
