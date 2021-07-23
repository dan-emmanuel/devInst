import './App.css';
import { BrowserRouter,Switch, Route, NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import FromApi1 from './FromApi1' 
import FromApi2 from './FromApi2' 
import FromApi3 from './FromApi3' 
function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <div className ="container" >
            <Nav className="me-auto">
              <NavLink className = "nav-link" activeClassName="active" to="/fromApi1">Fetch Data From An API</NavLink>
              <NavLink className = "nav-link" to="/fromApi2">Fetch Data From An API #2</NavLink>
              <NavLink className = "nav-link" to="/fromApi3">Fetch And Display Data</NavLink>
            </Nav>
          </div>
          </Navbar>
        <Switch>

          <Route path="/fromApi1" component={FromApi1}/>

          <Route path="/fromApi2" component={FromApi2}/>

          <Route path="/fromApi3" component={FromApi3}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
