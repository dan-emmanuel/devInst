import axios from "axios";
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const FETCH_ROBOTS = 'FETCH_ROBOTS';

export const handleChange = (value) => {
    return {
      type: SEARCH_TEXT,
      payload: value
    }
}

export const fetchRobots = ()=>async (dispatch)=>{
  try {
    let res = await axios.get('https://jsonplaceholder.typicode.com/users');
    let data = res.data;
    dispatch(
      {
        type:FETCH_ROBOTS,
        payload: data
      }
    )
  } catch (e) {
    console.log(e);
  } 
}