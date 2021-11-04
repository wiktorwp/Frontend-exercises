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
          <Route path="/directors/:id/edit">
            <DirectorEdit />
          </Route>
          <Route path="/directors/add">
            <DirectorForm />
          </Route>
          <Route exact path="/directors/:id">
            <DirectorDetails />
          </Route>
          <Route path="/directors">
            <DirectorList />
          </Route>
          <Route path="/movies/:id/assign">
            <ActorAssign/>
          </Route>
          <Route path="/movies/add">
            <MovieForm />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/actors/add">
            <ActorForm />
          </Route>
          <Route path="/actors/:id">
            <ActorDetails />
          </Route>
          <Route path="/actors">
            <ActorList />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
