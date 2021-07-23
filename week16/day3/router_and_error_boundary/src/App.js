import "./App.css";
import { Switch, Route, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary"




function App() {
  let HomeScreen = () => {
    return (
      <>
        <h1>Home</h1>
      </>
    );
  };
  let ProfileScreen = () => {
    return  (
    <>
      <h1>Profile Screen</h1>
    </>
    )
  };
  
  let ShopScreen = () => {
    throw new Error('An error has occured')
    
  };
  
  return (
    <div>
      <nav>
        <div className="list-group list-group-horizontal">
          <NavLink className="list-group-item btn btn-outline-primary" activeClassName="active" to="/" exact>
            Home
          </NavLink>
          <NavLink className="list-group-item btn btn-outline-primary" activeClassName="active"   to="/profile">
            Ptofile
          </NavLink>
          <NavLink className="list-group-item btn btn-outline-primary" activeClassName="active"  to="/shop">
            Shop
          </NavLink>
        </div>
        
      </nav>
      
      <Switch>
        <Route path="/profile">
         
          <ErrorBoundary>
            <ProfileScreen />
          </ErrorBoundary>
        </Route>
        <Route path="/shop">
          
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
        </Route>
        <Route path="/" exact>
          <ErrorBoundary>
            <HomeScreen />
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
