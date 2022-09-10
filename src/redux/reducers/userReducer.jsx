import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../tool";

import { history } from "../../index";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN), // có thể là null hoặc obj
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    // {email , password}
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "post",
        data: userLogin,
      });
      //sau khi đăng nhập thành công => lưu dữ liệu vào localstorage hoặc cookie
      //   console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      // Chuyển hướng về profile , trang quên mật khẩu (nếu sai)
      history.push("/profile");
      // sau khi đăng nhập thành công thì dispatch action getProfileApi

      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  console.log(accessToken)
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          //  header là các phần dữ liệu mặc đỉnh gửi đi

          Authorization: "Bearer " + accessToken,
        },
      });
      // lấy được thông tin profile => đưa lên redux
      const action = getProfileAction(result.data.content);
      dispatch(action);
      setStoreJson(USER_LOGIN,result.data.content)
    } catch (err) {
      console.log(err)
    }
  };
};
