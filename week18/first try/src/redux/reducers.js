import {SEARCH_TEXT} from './actions';

const initState = {
  searchText:''
}

export const reducer = (state=initState, action={}) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {...state, searchText:action.payload}
    default:
      return {...state}
  }
}
