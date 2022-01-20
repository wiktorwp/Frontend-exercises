import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardList from './ducks/cards/CardList'
import CardDetails from './ducks/cards/CardDetails';
import CardForm from './ducks/cards/CardForm';
import CardEdit from './ducks/cards/CardEdit';
import ProducentList from './ducks/producents/ProducentList';
import ProducentForm from './ducks/producents/ProducentForm';
import ProducentDetails from './ducks/producents/ProducentDetails';
import ProducentEdit from './ducks/producents/ProducentEdit';

function App() {
  return (
    <Router>
      <div className='main-body'>
        <nav className="Navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">Karty</Link>
            </li>
            <li>
              <Link to="/producents">Producenci</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/cards/:id/edit">
            <CardEdit />
          </Route>
          <Route exact path="/cards/add">
            <CardForm/>
          </Route>
          <Route exact path="/cards/:id">
            <CardDetails />
          </Route>
          <Route exact path="/cards">
            <CardList />
          </Route>
          <Route exact path="/producents">
            <ProducentList/>
          </Route>
          <Route exact path="/producents/add">
            <ProducentForm/>
          </Route>
          <Route exact path="/producents/details/:name">
            <ProducentDetails/>
          </Route>
          <Route exact path="/producents/:name/edit">
            <ProducentEdit/>
          </Route>
          <Route exact path="/">
            <CardList /> {/*Zmienic na Menu glowne?*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
