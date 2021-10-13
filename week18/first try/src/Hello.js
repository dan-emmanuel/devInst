import React from 'react';
import './hello.css'

const Hello = (props) => {

  return(
    <div className="box">
    {props.name}
    </div>
  )
}
export default Hello;
