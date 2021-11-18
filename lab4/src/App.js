import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './core/Home';
import MovieList from './movies/MovieList';
import MovieForm from './movies/MovieForm';
import MovieDetails from './movies/MovieDetails';
import DirectorList from './directors/DirectorList';
import DirectorForm from './directors/DirectorForm';
import DirectorDetails from './directors/DirectorDetails';
import DirectorEdit from './directors/DirectorEdit';
import ActorDetails from './actors/ActorDetails';
import ActorList from './actors/ActorList';
import ActorForm from './actors/ActorForm';
import ActorAssign from './actors/ActorAssign';
import ActorEdit from './actors/ActorEdit';

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
              <Link to="/directors">Directors</Link>
            </li>
            <li>
              <Link to="/directors/add">Add director</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/movies/add">Add movie</Link>
            </li>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
            <li>
              <Link to="/actors/add">Add actor</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/directors/:id/edit">
            <DirectorEdit />
          </Route>
          <Route exact path="/directors/add">
            <DirectorForm />
          </Route>
          <Route exact path="/directors/:id">
            <DirectorDetails />
          </Route>
          <Route exact path="/directors">
            <DirectorList />
          </Route>
          <Route exact path="/movies/add">
            <MovieForm />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route exact path="/actors/:id/edit">
            <ActorEdit />
          </Route>
          <Route exact path="/actors/add">
            <ActorForm />
          </Route>
          <Route exact path="/actors/:id">
            <ActorDetails />
          </Route>
          <Route exact path="/actors">
            <ActorList />
          </Route>
          <Route exact path="/movies">
            <MovieList />
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
