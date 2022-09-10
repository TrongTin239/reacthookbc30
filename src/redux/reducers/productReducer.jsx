import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
import { http } from "../../tool";
const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      //lấy dữ liệu từ payload
      const arrProduct = action.payload;
      // cập nhật lại state
      state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state, action) => {
      //Bước 4: sau khi nhận được dữ liệu từ dispatch2
      const productDetail = action.payload;
      state.productDetail = productDetail;
    },
  },
});

export const { getAllProducts, getProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;
export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get("/product");
      //   console.log(result);
      //sau khi lấy dữ liệu từ api => setState cho arrProduct
      const action = getAllProducts(result.data.content);
      //   console.log(action)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDetailProduct = (id) => {
  //Bước 2: thực thi Thunk
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      //Bước 3: sau khí có dữ liệu => dispatch lần 2
      const action = getProductDetailAction(result.data.content);
      dispatch(action);
      //   console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

// const addProductApi =() =>{
//     return async (dispatch) =>{
//         //thực thi add api
//         // axios thêm
//         // thực thi getAll
//         //dispatch(getProductApi())
//         dispatch => dispatch các thunk khác lên
//     }
// }
