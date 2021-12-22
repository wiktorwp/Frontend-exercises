import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './core/Home';
import TodoList from './todos/TodoList';
import TodoForm from './todos/TodoForm';
import TodoDetails from './todos/TodoDetails';
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
              <Link to="/todos">Todos</Link>
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
          <Route exact path="/todos/:id">
            <TodoDetails />
          </Route>
          <Route exact path="/notes">
            <NoteList />
          </Route>
          <Route exact path="/todos">
            <TodoList />
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
