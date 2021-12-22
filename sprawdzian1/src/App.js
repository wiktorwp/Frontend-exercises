import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './core/Home';
import PrezentList from './prezents/PrezentList'
import PrezentDetails from './prezents/PrezentDetails';
import NoteList from './notes/NoteList';
import NoteForm from './notes/NoteForm';
import NoteDetails from './notes/NoteDetails'

function App() {
  return (
    <Router>
      <div>
        <nav className="Navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/prezents">Prezenty</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/notes/:id">
            <NoteDetails/>
          </Route>
          <Route exact path="/prezents/:id">
            <PrezentDetails />
          </Route>
          <Route exact path="/notes">
            <NoteList />
          </Route>
          <Route exact path="/prezents">
            <PrezentList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
