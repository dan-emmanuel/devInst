import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import Result from './components/Result'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      fname: '',
      sname: '',
      percentage:undefined,
      result:undefined
    }
    console.log('constructor');
  }
  async changeHandler(e){
    const{name,value} = e.target
    console.log(name,value)
    await this.setState({[name]:value})
    e.target.nextElementSibling.textContent = value;
    if(this.state.fname!==""&&this.state.sname!==""){
      await this.fetchResult()
    }
  }
  async fetchResult(e){
    await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,  {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "29619d1c53msh0fa79d7a70d5dd3p182ad8jsn8d3a064aacad",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
  .then(response=>response.json())
  .then(response => {
    console.log(response)
    this.setState({

      "percentage" : response.percentage,
      "result" : response.result
    })
  })
  .catch(err => {
    console.error(err);
});
  }
  render(){
     const{changeHandler}= this
     const {fname,sname,percentage,result} = this.state;
    return (
      <>
        <Input name="fname" labelValue="First Name" changeHandler={changeHandler.bind(this)}/>
        <Input name="sname" labelValue="Second Name" changeHandler={changeHandler.bind(this)}/>
        <Result 
        fname = {fname}
        sname = {sname}
        percentage={percentage}
        result={result}
        />
      </>
    );
  }


  
}

export default App;
