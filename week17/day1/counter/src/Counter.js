import { connect } from 'react-redux'

let Counter = (props)=>{
    const {count} = props
    return (
        <p style={{color:"white"}}>{count}</p>
    )
}
const mapStateToProps = (state)=>{
    return {
        count : state.count,
    }
  }
  
export default connect(mapStateToProps,null)(Counter)