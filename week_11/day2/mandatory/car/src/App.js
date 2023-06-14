import logo from './logo.svg';
import './App.css';
import CarInfo from './Components/Car';
import MyButton from './Components/Events'
import Phone from './Components/Phone'
import Color from './Components/Color'

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <Color />
      <CarInfo name={carinfo.name} model={carinfo.model} />
      <MyButton />
      <Phone />
    </div>
  );
}

export default App;
