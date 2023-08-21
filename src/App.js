import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Dicrement, Multiply, Division } from "./Redux/Action";

function App() {
  const myState = useSelector((state) => state.Reducer);

  // console.log(myState);
  const State = useSelector((state) => state.MyReducer);
  console.log(State);

  const dispatch = useDispatch();
  // console.log(dispatch);
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input type="number" value={State} />
        <br />

        <input type="number" value={myState} />
        <br />
        <button onClick={() => dispatch(Increment())}>Plus</button>
        <button onClick={() => dispatch(Dicrement())}>Minus</button>
        <br />
        <button onClick={() => dispatch(Multiply())}>multiply</button>
        <button onClick={() => dispatch(Division())}>division</button>
      </div>
    </div>
  );
}

export default App;
