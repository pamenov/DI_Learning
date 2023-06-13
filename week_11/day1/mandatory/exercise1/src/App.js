import logo from './logo.svg';
import './App.css';
import First from './Exercise1';
import Second from './Exercise2';
import ThirdComponent from './Exercise3';
import UserFavoriteColors from './SeparateFileForThirdExercise'
import Forth from './Exercise4'
// import Second from './Exercise';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <First />
        <Second />
        <ThirdComponent.Third />
        <UserFavoriteColors />
        <Forth />
      </header>
    </div>
  );
}

export default App;
