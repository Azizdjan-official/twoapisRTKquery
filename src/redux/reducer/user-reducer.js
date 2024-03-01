import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  count: 0,
};

export const userReduser = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: () => {
      console.log("addddd");
    },
  },
});
