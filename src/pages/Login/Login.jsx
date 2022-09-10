import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/reducers/userReducer";
export default function Login(props) {
  const dispatch = useDispatch();
  //Lấy dữ liệu từ form
  // console.log("123");
  const frm = useFormik({
    initialValues: {
      //dữ liệu mặc định của form
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Password không được bỏ trống")
        .min(3, "mk từ 8 - 12 ký tự")
        .max(32, "mk từ 8 - 12 ký tự"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      // Cách dispatch 1
      // const action = loginApi(values);
      // dispatch(action);

      // Cách dispatch 2

      dispatch(loginApi(values));
    },
  });
  return (
    <form className="container" onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          id="email"
          type="text"
          className="form-control"
          name="email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email ? (
          <span className="text-danger"> {frm.errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          id="password"
          //   type="password"
          className="form-control"
          name="password"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.password ? (
          <span className="text-danger"> {frm.errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
