let initState = {
    count: 0,
  };
  
  export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "CHANGECOUNT":
        return { ...state, count: action.payload };
      break;
      
      default:
      return { ...state };
    }
  };
  