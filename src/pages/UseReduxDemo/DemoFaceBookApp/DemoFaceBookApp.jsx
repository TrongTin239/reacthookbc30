import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addComment } from "../../../redux/reducers/facebookReducer";

export default function DemoFaceBookApp() {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  //   console.log(arrComment);
  const userComment = useRef({ name: "", content: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { id, value } = e.target;
    userComment.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // đưa dữ liệu lên reudux
    // cách 1
    // const action = {
    //   type: "facebookReducer/addComment",
    //   payload: 123,
    // };
    // dispatch(action);

    //Cách 2: dùng action creator của reduxSlice
    const action = addComment(userComment.current);
    dispatch(action);
  };
  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row mt-3" key={index}>
          <div className="col-2">
            <img src="https://i.pravatar.cc?1" alt="avt" className="w-100" />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <form className="frm" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>name</p>
              <input
                type="text"
                className="form-control"
                id="name"
                onInput={handleChange}
              />
            </div>
            <div className="form-group">
              <p>content</p>
              <input
                type="text"
                className="form-control"
                id="content"
                onInput={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
