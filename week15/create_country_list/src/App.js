import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  
  constructor(){
    super();
    this.state = { 
      countries: [],
      cities:[]
    };
  }

  componentDidMount() {
    this.fetchCountryData().then((resp)=>this.setState({countries:resp}));
  }
  
  fetchCountryData() {
      return fetch('http://localhost:5000/getCountries')
      .then(response => response.json())
      
  }

  fetchcitiesData = (e)=> {
    fetch(`http://localhost:5000/cities/${e.target.value}`)
    .then(response => response.json())
    .then((e)=>{console.log(this);this.setState({cities:e})})
  }
  
 
  render() {
    return (
      <>
        <select onChange={this.fetchcitiesData}>
          {this.state.countries.map(e=>{
            return <option key={e.country_id} value={e.country_id}>{e.country}</option>
            
          })}
        </select>  

        {
          this.state.cities.length>0
          ?<select>
              {this.state.cities.map(e=>{
                return <option key={e.city_id} value={e.city_id}>{e.city}</option>
                
              })}
            </select>  
          :""
        }
        </>
    )
  }
}

export default App;
