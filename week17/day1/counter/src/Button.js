import { connect } from 'react-redux'
import {changeProps} from  './redux/action'

let Button = (props)=>{

    
    const {value,changeCount,count} = props
    const action = value==="+"
    ?"add"
    :"less"
    
    return (
        <button onClick={(e)=>changeCount(e,count)} style={{fontSize:"1.2em" ,width: "100px",height:"100px ",margin:"10px"}} data-action={action} >{value}</button>
    )
}

const mapStateToProps = (state)=>{
    return {
        count : state.count,
    }

    
}
const mapDispatchToProps = (dispatch)=>{
    return {
        changeCount:(e,count)=>{
            e.target.dataset.action==="add"
            ?dispatch(changeProps(count+1))
            :dispatch(changeProps(count-1))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Button)

