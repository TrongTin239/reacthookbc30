import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const rendeLoginNavItem = () => {
    if (!userLogin) {
      return (
        <NavLink className="nav-link" to="./logindemo">
          Login
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link" to="./profile">
        Hello !{userLogin.name}
      </NavLink>
    );
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Project Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            {/* <li className="nav-item active">
              <NavLink className="nav-link" to="/usestate">
                UseState <span className="visually-hidden"></span>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hook
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/profile">
                  Profile
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  Use Effect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  Use CallBack
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  Use Memo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  Use Ref
                </NavLink>
                <NavLink className="dropdown-item" to="/useredux">
                  Demo Redux (number)
                </NavLink>
                <NavLink className="dropdown-item" to="/facebookapp">
                  Demo facebook
                </NavLink>
                <NavLink className="dropdown-item" to="/logindemo">
                  Login Demo
                </NavLink>
                <NavLink className="dropdown-item" to="/demosearch">
                  Demo Search Params
                </NavLink>
                <NavLink className="dropdown-item" to="/customhook">
                  useRoute(custom hook)
                </NavLink>
                <NavLink className="dropdown-item" to="/antd">
                  Antd demo
                </NavLink>
                <NavLink className="dropdown-item" to="/demologin">
                  Login (Authorization - token)
                </NavLink>
              </div>
            </li>
            <li className="nav-item">{rendeLoginNavItem()}</li>
          </ul>

          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
