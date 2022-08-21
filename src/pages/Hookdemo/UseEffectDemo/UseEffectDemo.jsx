import React, { useEffect, useState } from "react";
import axios from "axios";
let timeout = {};

export default function UseEffectDemo(props) {
  const [arrProduct, setProduct] = useState([
    {
      id: 1,
      name: "propduct 1",
      price: 1000,
      imgage: "https://i.pravatar.cc?u=2",
    },
  ]);
  const [count, setCount] = useState(60);
  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="col-4 my-4" key={index}>
          <div className="card">
            <img src={prod.image} alt="..." />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>{prod.price}$</p>
              <button className="btn btn-success">add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };
  const getAPI = async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      //   console.log(result.data.content);
      setProduct(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //dependency (tham số thứ 2 là mảng rổng thì hàm này chạy 1 lần duy nhất khi giao diện render lần đầu)
    //tương đương componentDidMount
    getAPI();
    // cài đặt hàm tự chày ngầm 1s setCOunt 1 lần
    // timeout = setInterval(() => {
    //   setCount((count) => {
    //     console.log(123)
    //     return count - 1;
    //   });
    // }, 1000);
    return () => {
      // những lệnh cài đặt sẽ chạy khi component mất khỏi giao diện (tương đương componentWillUnmount)
      clearInterval(timeout);   
    };
    // console.log(count);
  }, []);
  return (
    <div className="container">
      <h3>Count :{count}</h3>

      <hr />
      <h3 className="text-center">Shoes App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
