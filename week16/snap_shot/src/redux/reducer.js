let initState = {
  imgs: [],
};
  
  export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "SETDATAS":
        console.log(action.payload)
      return { ...state, imgs: action.payload };
      
      default:
      return { ...state };
    }
  };