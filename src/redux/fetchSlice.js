import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    newData: [],
    type: "",
    url: "",
    id: null,
    author: "",
    model: false,
    sideBarIndex: "",
    sideBg: "bg-red-400",
    cateCheck: "trending",
    logIn: false,
    logOutModel: false,
    loggedInUser: null
  },
  reducers: {
    setNewsData: (state, action) => {
      state.newData = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setModel: (state) => {
      state.model = !state.model;
    },
    setSideBarIndex: (state, action) => {
      state.sideBarIndex = action.payload;
    },
    setSideBg: (state, action) => {
      state.sideBg = action.payload;
    },
    setCateCheck: (state, action) => {
      state.cateCheck = action.payload;
    },
    setLogIn: (state, action) => {
      state.logIn = action.payload;
    },
    setLogOutModel: (state, action) => {
      state.logOutModel = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});
export default fetchSlice.reducer;
export const {
  setNewsData,
  setType,
  setUrl,
  author,
  setModel,
  model,
  setSideBarIndex,
  setAuthor,
  setSideBg,
  sideBg,
  setCateCheck,
  cateCheck,
  setLogIn,
  logIn,
  logOutModel,
  setLogOutModel,
  setLoggedInUser,
  loggedInUser
} = fetchSlice.actions;
