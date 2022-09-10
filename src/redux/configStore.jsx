import { configureStore } from "@reduxjs/toolkit";
import facebookReducer from "./reducers/facebookReducer";
import numberReducer, { changeNumber } from "./reducers/numberReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer,
    productReducer: productReducer,
    userReducer: userReducer,
  },
});
