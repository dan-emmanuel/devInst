import React from "react";

let Cards = ({data,randomIndexGen,color})=>{
    // randomIndexGen()
    document.querySelector(`body`).style.backgroundColor=color

    return (
        <div className="quotebox" >
            <div className={"fadeIn"} >
                <h1 style={{color:color}} id="quote">"{data.quote}"</h1>
                <h5 style={{color:color}} id="author">-{data.author}-</h5>
            </div>
            <button style={{backgroundColor:color}} id="newquote" onClick={randomIndexGen}>New quote</button>
        </div>
    )
}
  
export default Cards;


