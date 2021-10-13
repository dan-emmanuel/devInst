import {  Link} from "react-router-dom";
import './LinkStyle.css'


let Linker =  (props)=>{
    let {to,text} = props
    return <Link to={to}>{text}</Link>
  }

export default Linker