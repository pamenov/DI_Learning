import './App.css';
import MovieDetails from './Components/MovieDetails';
import MovieList from './Components/MovieList'
// import MovieDetails from './Components/MovieDetails'

function App() {
  return (
    <div className='container'>
      <MovieList className='child'/>
      <MovieDetails className='child'/>
    </div>
  );
}

export default App;
