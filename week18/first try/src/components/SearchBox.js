import React from 'react';
import {connect} from 'react-redux';
import {handleChange} from '../redux/actions'

const SearchBox = (props) => {
  const {handleChange} = props;
  return(
    <div>
       <input
       className='pa3 bs b--green bg-lightest-blue'
       placeholder="Search..." type='search'
       onChange={handleChange}
       />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(handleChange(e.target.value))
  }
}
export default connect(null,mapDispatchToProps)(SearchBox)
