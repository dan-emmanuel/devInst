import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  
  constructor(){
    super();
    this.state = { countries: [] };
  }

  componentDidMount() {
    this.fetchData().then((resp)=>this.setState({countries:resp}));
  }
  
  fetchData() {
      return fetch('http://localhost:5000/getCountries')
      .then(response => response.json())
      
  }

 
  render() {
    return (

      <select>
        {this.state.countries.map(e=>{
          return (
            <option key={e.country_id} value={e.country_id}>{e.country}</option>
          )
        })}
      </select>  
    
    )
  }
}

export default App;
