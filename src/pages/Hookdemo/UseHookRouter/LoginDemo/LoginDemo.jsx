import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

export default function LoginDemo(props) {
  const navigate = useNavigate();
  // console.log(props)
  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //Chặn reload browser
    console.log(userLoginRef.current);
    let promise = new Promise((resolve, errorFunction) => {
      setTimeout(() => {
        if (userLoginRef.current.userName === "nguyentrongtin") {
          resolve("Đăng nhập thành công");
        } else {
          errorFunction("đăng nhập thất bại");
        }
      }, 1000);
    });


    promise.then(result=>{
        console.log(result)
        navigate("/")
    })
    promise.catch(err =>{
        navigate("/facebookapp")
    })
    // let result = await promise;
    // console.log(result);
    // navigate("home");
    //Có replace : là k lưu lại lịch sử khi back trang
    //Không có replace là lưu lại lịch sử khi back trang
    // history.push('/');
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input className="form-control" id="userName" onChange={handleChange} />
      </div>
      <div className="form-group">
        <p>password</p>
        <input className="form-control" id="passWord" onChange={handleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}
