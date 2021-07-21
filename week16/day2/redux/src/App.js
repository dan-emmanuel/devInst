import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {connect} from 'react-redux'
import {changePropOne,changePropTwo} from  './redux/action'
class App extends Component{
  constructor(props){
    super()
  //   this.state = {
  //     propOne:"example",
  //     propTwo:"prop2"
  //   }
  }
  
  // changeProp1 = (e)=>{
  //   this.setState({
  //     propOne : e.target.value
  //   })
    
  // }

  // changeProp2 = (e)=>{
  //   let {propOne} = this.state
  //   this.setState({
  //     propTwo : propOne
  //   })
  // }

  render(){
    let {propOne,propTwo,changeProp1,changeProp2} = this.props
    return (
        <div >
          <h1>
            This is a Simple Redux Example
          </h1>
          <div>
            here is property one : {propOne}
          </div>

          <div>
            here is property two : {propTwo}
          </div>
          <div>
            <button onClick={(e)=>changeProp2(propOne)}>
              click
            </button>
          </div>
            <input onChange = {changeProp1}  type="text"/>

          <div>
            <button onClick={(e)=>changeProp2(propOne)}>
              click
            </button>
          </div>

        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    propOne : state.propOne,
    propTwo : state.propTwo
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changeProp1:(e)=>dispatch(changePropOne(e.target.value)),
    changeProp2:()=>{dispatch(changePropTwo())}

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
