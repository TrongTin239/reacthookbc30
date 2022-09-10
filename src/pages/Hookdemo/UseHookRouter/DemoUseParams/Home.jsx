import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductApi,
} from "../../../../redux/reducers/productReducer";

export default function Home() {
  //sử dụng useSelector lấy dữ liệu từ redux về

  const { arrProduct } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [arrProduct, setArrProduct] = useState([]);
  // call api

  const getAllProductApi = async () => {
    // sau khi lấy dữ liệu từ api => setState cho arrProduct
    // setArrProduct(result.data.content)
    /**
     * Dạng 1: action là obj
     * action = {
     * type:""
     * payload:""
     * }
     *
     *
     * Dạng 2: action là callback funct
     * action = (dispath2) =>{
     *
     * call api a
     * call api b
     *  action = {
     * type:""
     * payload:""
     *
     * }
     * dispatch2(action)
     * }
     */

    const actionThunk = getProductApi();
    // console.log(actionThunk)
    dispatch(actionThunk);
  };
  useEffect(() => {
    getAllProductApi();
  }, []);

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body bg-dark text-white">
              <p> {item.name} </p>
              <p> {item.gia} </p>
              <NavLink className="btn btn-secondary" to={`/detail/${item.id}`}>
                View detail
              </NavLink>
              <button
                className=" btn btn-success mx-2"
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Shoes app</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
