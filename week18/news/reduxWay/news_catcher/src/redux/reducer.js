import { FETCH_NEWS } from "./action";

const initState = {
  articles: [],
};

export const reducers = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_NEWS:
    return {...state,articles:action.payload}     
    default:
      return { ...state };
  }
};
