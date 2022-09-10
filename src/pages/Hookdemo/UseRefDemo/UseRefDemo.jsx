import React, { useState } from "react";
import { useRef } from "react";

/*
useState lấy giá trị input => khi có tính khả năng chỉnh load lại form trên cùng giao diện
useRef sử dụng đối với form không bao gồm chỉnh sửa load lại
useRef: lưu lại giá trị sau các lần render

*/
export default function UseRefDemo() {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
    // setUserLogin({
    // //   ...userLogin,
    // //   [id]: value,
    // });
  };
  console.log(userLogin);
  const handleSumit = (e) => {
    e.preventDefault();
    // console.log(123)
  };

  const userLoginRef = useRef({
    username: "",
    password: "",
  });
  return (
    <div className="container">
      <form action="" onSubmit={handleSumit}>
        <h3>Log in</h3>
        <div className="form-group">
          <p>username</p>
          <input
            type="text"
            className="form-control"
            id="username"
            onInput={handleChange}
          />
        </div>
        <div className="form-group">
          <p>password</p>
          <input
            type="text"
            className="form-control"
            id="password"
            onInput={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
