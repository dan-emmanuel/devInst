import './App.css';
import {  Route, Link,Switch,useParams} from "react-router-dom";
import React, {  useEffect,useState  } from 'react';
import { createClient } from 'pexels';
import Linker from './Linker';
import Main from './Main';


let searchByInput = (e)=>{
  e.preventDefault()
  let currentForm = e.target
  let nextPage = currentForm["cat"].value
  window.location = `/${nextPage}`
}

function App() {
 
  

  const [perPage, setPerPage] = useState("25");
  
  let changePerPage = (e)=>{
    setPerPage(e.target.dataset.value)
  }
  

  return (
    <div className="App">
     
      <h1 style={
        {
          fontFamily :'"Lobster","Josefin Sans",Helvetica,Arial,sans-serif',
          fontSize : "4em",
          color: "#051c33",
          fontWeight : "bold"
        }} >SnapShot</h1>

      <form onSubmit={searchByInput} >
        <input type="text" name = "cat" />
        <input type="submit" />
        
      </form>

     <div className="container">
      <Linker  to="/mountain" style={{margin:"15px"}}  text = "mountain"/>
      <Linker to="/beaches" style={{margin:"15px"}} text = "beaches"/>
      <Linker to="/birds" style={{margin:"15px"}} text = "birds"/>
      <Linker to="/food" style={{margin:"15px"}} text = "food"/>

     </div>

        <button onClick = {changePerPage} data-value ="20" >
          20
        </button>
        <button onClick = {changePerPage} data-value ="25" >
          25
        </button>
        <button onClick = {changePerPage} data-value ="30" >
          30
        </button>
        <button onClick = {changePerPage} data-value ="35" >
          35
        </button>


     


     <Switch>
          <Route path="/:cat">
            <Main page={perPage}/>
          </Route>

     </Switch>



    </div>
  );
}

export default App;
