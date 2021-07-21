import React, {useState} from 'react';
// useEffect
// export default class Counter extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             count :0
//         }
//     }

//     riser = ()=>{
//         console.log()
        
//             this.setState(
//                 {count: ++this.state.count}
//             )
        
       
//     }
//     render() {
//         if(this.state.count===4){
//             throw new Error("max reached ")
//         }
//       return( 
      
//        <div  style={{height:"auto", marginTop:"10%" ,width:"150px",border:"1px solid black",display: "flex", justifyContent:"center"}} >
//             <button   onClick={this.riser}>rise up the count</button> 
//             <div >current count : {this.state.count}</div> 

//        </div>

//       )
//     }
// }

const Counter = ()=>{
    const [counter,setCounter] = useState(0)
    const [user,setuser] = useState("")
    let changeInput = (e)=>{
        setuser(e.target.value)
    }
    let riser = ()=>{
        setCounter(counter+1)
    }
    return (
       <>
            <h1 >current count : {counter}</h1> 
            <button   onClick={riser}>rise up the count</button> 
            <h1 >your name is : {user}</h1> 

            <input type="text" onChange={changeInput} />
       </>
    )
}
export default Counter
