import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary"


let HomeScreen = () => {
  return (
    <>
      
      <ErrorBoundary>
        <h1>Home</h1>

      </ErrorBoundary>

    </>
  );
};
let ProfileScreen = () => {
  return <>
   <nav>
        
        
      </nav>
      <ErrorBoundary>
        <h1>Profile Screen</h1>
      </ErrorBoundary>
  </>;
};
let ShopScreen = () => {
  return <>
      
      
        {new Error('Whoops!')}
      </ErrorBoundary>
  </>;
};

function App() {
  return (
    <div>
      <nav>
        <div className="list-group list-group-horizontal">
          <Link className="list-group-item btn btn-outline-primary " to="/">
            Home
          </Link>
          <Link className="list-group-item btn btn-outline-primary active" to="/profile">
            Ptofile
          </Link>
          <Link className="list-group-item btn btn-outline-primary" to="/shop">
            Shop
          </Link>
        </div>
        
      </nav>
      <Switch>
        <Route path="/profile">
          <ErrorBoundary>
          <ProfileScreen />
          </ErrorBoundary>
        </Route>
        <Route path="/shop">
          <>
          <ErrorBoundary>

          <ShopScreen />
          </ErrorBoundary>

          </>
        </Route>
        <Route path="/">
          <ErrorBoundary>

          <HomeScreen />
          </ErrorBoundary>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
