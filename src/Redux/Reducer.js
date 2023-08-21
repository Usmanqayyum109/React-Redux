const initialState = 7;

const Reducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case "INCREMENT":
      return state + 1;

    case "DICREMENT":
      return state - 1;

    default:
      return state;
  }
};

const myInitialState = 2;

export const MyReducer = (state = myInitialState, actoin) => {
  switch (actoin.type) {
    case "MULTIPLY":
      return state * 5;

    case "DIVISION":
      return state / 5;

    default:
      return state;
  }
};

export default Reducer;
