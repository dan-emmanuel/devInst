let initState = {
  imgs: [],
};
  
  export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "getData":
      return { ...state, propOne: action.payload };
      
      default:
      return { ...state };
    }
  };