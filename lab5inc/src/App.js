import './App.css';
import IncrementModule from './Increment/increment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './core/Home';

function App() {
  return (
    <Router>
      <div>
        <nav className="Navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
          <div>
      abc
      <IncrementModule/>
    </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
