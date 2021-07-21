let initState = {
  propOne: "example",
  propTwo: "prop2",
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "PROPONE":
      return { ...state, propOne: action.payload };
    break;
    case "PROPTWO":
    return { ...state, propTwo: state.propOne };
    break;

    default:
    return { ...state };
  }
};
