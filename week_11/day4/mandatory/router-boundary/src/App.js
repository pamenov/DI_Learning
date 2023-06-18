import './App.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from './PostList';
import Example1 from './Ex3_1';
import Example2 from './Ex3_2';
import Example3 from './Ex3_3';

const Home = () => (
  <>
    <h1> Home </h1>
    <PostList/>
    <Example1/>
    <Example2/>
    <Example3/>
  </>
)

const Profile = () => (
   <h1> Profile </h1>
)

const Shop = () => {
  throw new Error('Error! Ha-ha-ha! No shopping for you!');
  return <h1> Shop </h1>
}





function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-light bg-light">
        <ul className="navbar-nav flex-row mr-auto">
          <li>
            <NavLink to="/" className="nav-link mx-2">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="nav-link mx-2">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="nav-link mx-2">Shop</NavLink>
          </li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<ErrorBoundary> <Home/> </ErrorBoundary>}>
      </Route>
      <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />
      <Route path="/shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
