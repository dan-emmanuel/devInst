import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Users from "./Users";

function App() {
  return (
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

// https://reactrouter.com/web/example/url-params
// <Switch>
{/* <Route path='/' exact >
<Home ata={'kkkk'} />
</Route>
<Route render={() => <About data={'kkkk'}/>} path='/about' />
<Route children={<Counter/>} path='/counter' />
<Route component={Counter} path='/counter' />
</Switch> */}
export default App;
