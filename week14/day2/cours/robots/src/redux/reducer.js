let initState = {
    searchText: "",
}


export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "CHANGESEARCHTEX":
        return { ...state, searchText: action.payload };
      break;
      
      default:
      return { ...state };
    }
  };
  