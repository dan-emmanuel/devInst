import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TenTimes from './TenTimes';
import Ol from './Ol';
import H1 from './H1';
import Form from './Form'
import User from './User'
import reportWebVitals from './reportWebVitals';
const MyNoJsxelement =()=> <h1>I do not use JSX</h1>
const MyJsxElementt =()=> <h1>I Love JSX</h1>


// ex2
// ReactDOM.render(
//   <React.StrictMode>
//     <MyJsxElementt/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// ex3
// ReactDOM.render(
//   React.createElement(MyNoJsxelement),
//   document.getElementById('root')
// )

// ex4
ReactDOM.render(
  <React.StrictMode>
    <H1 text ="I am a Header" />
    <H1 text ="I am a Header too" />

    <TenTimes/>
    <Ol/>
    <Form/>
    <User name="John" age="12"/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
