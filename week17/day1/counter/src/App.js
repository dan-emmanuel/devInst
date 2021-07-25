import './App.css';
import Counter from './Counter';
import React, { useState } from 'react';
import Button from './Button';

function App() {


  return (
    <div style= {{width:"100vw", 
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems :"center",
          flexDirection:"column",
          backgroundColor:"#282d36",
          
      }} className="App">
      <Counter />
      <div>
      <Button  value={"+"}/>
      <Button  value={"-"}/>


      </div>
    </div>
  );
}

export default App;
