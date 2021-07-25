import { BrowserRouter,Switch, Route } from "react-router-dom";
import Header from  './header/Header'
import Main from  './main/Main'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
          <Header/>
      </div>

      <Switch>
        <Route path="/:cat" children={<Main/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
