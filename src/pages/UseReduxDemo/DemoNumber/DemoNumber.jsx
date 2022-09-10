import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeNumber } from "../../../redux/reducers/numberReducer";
export default function DemoNumber() {
  const number = useSelector((state) => state.number);
  const dispacth = useDispatch();
  return (
    <div className="container">
      <h3>Number : {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          //   const action = {
          //     type: "CHANGE_NUMBER",
          //     payload: number + 1,
          //   };
          //   dispacth(action);
          //   const action = changeNumber(number + 1);
          const action = {
            type: "numberReducer/changeNumber",
            payload: number + 1,
          };
        }}
      >
        +
      </button>
    </div>
  );
}
