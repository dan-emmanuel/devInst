import {SEARCH_TEXT} from './actions';
import {FETCH_ROBOTS} from './actions';


const initState = {
  searchText:'',
  robots : []
}

export const reducer = (state=initState, action={}) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {...state, searchText:action.payload}
      case FETCH_ROBOTS:
      return {...state, robots:action.payload}
    default:
      return {...state}
  }
}
