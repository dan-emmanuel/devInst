let initState = {
  imgs: [],
  perPage:30
};
  
  export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "SETDATAS":
      return { ...state, imgs: action.payload };
      case "SETPAGE":
      return { ...state, perPage: action.payload };
      default:
      return { ...state };
    }
  };