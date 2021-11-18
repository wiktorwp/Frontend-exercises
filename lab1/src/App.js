import './App.css';
import ProductList from './Products/ProductList';
import ProductCreate from './Products/ProductCreate';
import ProductDetails  from './Products/ProductDetails';
import ProductEdit from './Products/ProductEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
      <div>
        <nav className="Navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/products/new">Nowy</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products/:Id/details">
            <ProductDetails/>
          </Route>
          <Route path="/products/:Id/edit">
            <ProductEdit />
          </Route>
          <Route exact path="/products/new">
            <ProductCreate />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
