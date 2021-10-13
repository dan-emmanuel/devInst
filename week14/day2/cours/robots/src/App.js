import React from 'react';
import Cards from './components/Cards';
import Input from './components/Input';
import { connect } from 'react-redux';
import {changeSearchText} from './redux/action'
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

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render(){
    console.log('render');
    const {name,robots} = this.state;
    const{searchText,handleChange} = this.props
    const filterRobots = robots.filter(robot=>robot.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <>
        <div>
          <h1>{name}</h1>
        <Input handleChange={handleChange}/>
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
const mapStateToProps = (state)=>{
  return {
    searchText : state.searchText,
  }

  
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleChange:(e)=>{dispatch(changeSearchText(e.target.value))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);