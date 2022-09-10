import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getDetailProduct } from "../../../../redux/reducers/productReducer";
export default function Detail() {
  const dispatch = useDispatch();
  // const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  console.log(params);
  const { productDetail } = useSelector((state) => state.productReducer);

  const getProductDetailApi = async () => {
    let { id } = params;

    //Bước 1: dispatch Thunk
    const actionThunk = getDetailProduct(id);
    dispatch(actionThunk);
  };
  useEffect(() => {
    // call api
    getProductDetailApi();
  }, [params.id]);
  return (
    <div className="container">
      <h3> Params: Product - {params.id}</h3>
      <div className="row">
        <div className="col-4">
          <img
            className="w-100"
            src={productDetail.image}
            alt={productDetail.name}
          />
        </div>
        <div className="col-8">
          <h1> {productDetail.name} </h1>
        </div>
        <h3> Related Product</h3>
        <div className="row mt-2 mb-5">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt="..." />
                  <div className="card-body bg-dark text-white">
                    <p> {item.name} </p>
                    <p> {item.price}$ </p>
                    <NavLink
                      className="btn btn-secondary"
                      to={`/detail/${item.id}`}
                    >
                      View detail
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
