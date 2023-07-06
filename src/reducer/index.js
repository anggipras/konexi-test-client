const initialState = {
  loginCond: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loginCond: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
