import React, { useCallback, useState } from "react";
import Comment from "./Comment";

export default function UseCallBaclDemo() {
  const [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);
  const renderLike = () => {
    return (
      <span>
        {" "}
        bạn đã thả {like} <i className="fa fa-heart text-danger" />
      </span>
    );
  };

  //useCallback dùng để giữ lại giá trị của hàm ở lần render trước đó

  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container">
      <h3>number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <div className="card w-25">
        <img src="https://i.pravatar.cc" alt="avt" />
        <div className="card-body">
          <p>
            Like : {like} <i className="fa fa-heart text-danger" />
          </p>
          <button
            className="btn btn-danger text-white"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            <i className="fa fa-heart" />
          </button>
        </div>
      </div>
      <Comment renderLike={callBackRenderLike} />
    </div>
  );
}
