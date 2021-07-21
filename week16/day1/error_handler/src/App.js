import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
import Counter from "./Counter";
import ErrorHandler from "./ErrorHandler";
import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import { Route,Switch } from "react-router-dom";
function App() {
  return (

      <>
        <ErrorHandler>
            <Counter/>
        </ErrorHandler>
      </>
  );
}

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       page: "Home",
//     };
   
//   }
//   changePage = (e)=>{
//     this.setState({
//       page:e
//     })
//   }
//   render() {
//     switch (this.state.page) {
//       case "Home":
//         return <Home buttonClick = {this.changePage}/>;
//       break;
//       case "About":
//         return <About buttonClick = {this.changePage} />;
//       break;
//       default:
//         return <Home buttonClick = {this.changePage}/>;
//       break;
//     }
//   }
// }


// const App = ()=>{
//   return ()=>{
//     <Switch>
//       <Route component = {About} path = '/about'/>
//       <Route component = {Home} path = '/home'/>

//     </Switch>
//   }
// }

export default App