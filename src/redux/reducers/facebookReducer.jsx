import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    {
      name: "Khải",
      content: "hoho",
    },
    {
      name: "Hậu",
      content: "haha",
    },
  ],
};

const facebookReducer = createSlice({
  name: "facebookReducer", //tên nối tới tên action
  initialState,
  reducers: {
    addComment: (state, action) => {
      // console.log(action);
      // b1: lấy dữ liệu
      const userComment = action.payload;
      // b2 : cập nhật state
    state.arrComment.push({...userComment})
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;
