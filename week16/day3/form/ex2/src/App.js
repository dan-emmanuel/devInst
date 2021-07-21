import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  let handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
    let form = e.target
    let datas = new FormData(form);
    const value = Object.fromEntries(datas.entries())
    console.log(value)
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        const element = value[key];
        switch (key) {
          case "fname":
            setFname(element)
          break;
          case "lname":
            setLname(element)
          break;
          case "phone":
            setPhone(element)
          break;
          case "email":
            setEmail(element)
          break;
          default:
          break;
        }
      }
    }
  }

  let reseter = ()=>{
    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
  }

  return (
    <div >
      {
        fname===""
        ?(
          <div style={{
            border:"1px black solid",
            margin:"50px",
            borderRadius:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent :"space-around",
            alignItems:"center",
            backgroundColor:"#d3d3d3",
            width:"300px"
          }}>
            <h1 style = {{color:"#2f4f4f"}}> Welcome!</h1>
            <p>Please provide your informations below.</p>
            <form onSubmit={handleSubmit}>
              <input style={{display:"block",width:"auto"}} name ="fname" type="text" placeholder="First Name" />
              <input style={{display:"block",width:"auto"}} name ="lname" type="text" placeholder="Last Name" />
              <input style={{display:"block",width:"auto"}} name ="phone" type="text" placeholder="Phone Number" />
              <input style={{display:"block",width:"auto"}} name ="email" type="mail" placeholder="Email Adress" />
              <input style={{display:"block",width:"auto"}} type ="submit" value = "submit" />
            </form>
          </div>
        )
        :(<div style={{
          border:"1px black solid",
          margin:"50px",
          borderRadius:"20px",
          display:"flex",
          flexDirection:"column",
          justifyContent :"space-around",
          alignItems:"center",
          backgroundColor:"#d3d3d3",
          width:"300px"
        }}>
          <p>
            {lname}, {fname} 
          </p>

          <p>
            {phone}|{email} 
          </p>

          <button onClick={()=>reseter()}>Reset</button>
        </div>)
      }


    </div>
  );
}

export default App;
