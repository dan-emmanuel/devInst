import React from 'react';
import Cards from './components/Cards';
import Input from './components/Input';

import 'tachyons';
// import {robots} from './robots'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      robots: [],
      searchText :``,
   
    }
    console.log('constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');
    this.setState({name:'Robots App'});
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(users => {
    //   this.setState({robots:users})
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }
  //
  handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      this.setState({robots:users})
    })
    .catch(err => {
      console.log(err);
    })
  }
  //

  handleChange = (e)=> this.setState({searchText:e.target.value})
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render(){
    console.log('render');
    const {name,robots,searchText} = this.state;
    const filterRobots = robots.filter(robot=>robot.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <>
        <div>
          <h1>{name}</h1>
        <Input handleChange={this.handleChange}/>
        </div>
        
        {
          filterRobots.map((item,i)=>{
            return <Cards key={i} user={item} />
          })
        }
        <button onClick={this.handleClick}>Get Robots</button>
      </>
    );
  }
}

export default App;