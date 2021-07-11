import React from 'react';
import './App.css';
import Cards from './Cards'
import quotes from './Quotes';


class App extends React.Component {
  constructor(props) {
    super();
    // N’appelez pas `this.setState()` ici !
    this.state = { 
      quotes: quotes,
      currentColor : `#${Math.floor(Math.random()*16777215).toString(16)}`,
      currentQuote : quotes[Math.floor(Math.random()*(quotes.length - 0 + 1))],
    };
    document.querySelector(`body`).style.backgroundColor=this.state.currentColor
    console.log(this.state.currentColor)
  }
   randomIndexGen = async()=>{
    this.setState({
      currentQuote :this.state.quotes[Math.floor(Math.random()*(quotes.length - 0 + 1))],
      currentColor : `#${Math.floor(Math.random()*16777215).toString(16)}`,
    }) 
    console.log(this.state)
    // document.querySelector(`body`).style.backgroundColor=this.state.currentColor
  }

  render() {
    let {currentQuote,currentColor} = this.state
    return <>
    <Cards  data={currentQuote} color={currentColor} randomIndexGen={this.randomIndexGen}/>
    </>
  };
}

export default App;
