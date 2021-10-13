import { BrowserRouter,Switch, Route } from "react-router-dom";
import Header from  './header/Header'
import Main from  './main/Main'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>

        <Switch>
          <Route path="/:cat" component={Main} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
