import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function DemoUseSearchParams() {
  let keywordRef = useRef("");
  let timeoutRef = useRef({});
  const [searchParams, setSearchParams] = useSearchParams();
  let [arrProduct, setArrProduct] = useState([]);
  const getProductByKeyword = async () => {
    try {
      // lây key word trên url
      let keyword = searchParams.get("keyword");
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
        method: "GET",
      });
      console.log(result.data.content);
      setArrProduct(result.data.content);
      clearTimeout(timeoutRef.current);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (keywordRef.current !== "") {
      //khi từ khóa có giá trị

      //call api
      getProductByKeyword();
    }
  }, [keywordRef.current]);
  const handleChange = (e) => {
    keywordRef.current = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Đưa dữ liệu keyword người dùng nhập lên url
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };

  const renderProductByKeyword = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <img src={item.image} alt="..." className="w-100" />
          <div className="card-body">
            <p> {item.name} </p>
            <p> {item.price}$ </p>
            <NavLink className="btn btn-success" to={`/detail/ ${item.id}`}>
              View detail
            </NavLink>
          </div>
        </div>
      );
    });
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white mt-2">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">{renderProductByKeyword()}</div>
      </div>
    </form>
  );
}
