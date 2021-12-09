import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export const databaseSlice = createSlice({
  name: "database",
  initialState: {
    data: null,
  },
  reducers: {
    setDatabase: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDatabase } = databaseSlice.actions;
export default databaseSlice.reducer;

export const getData = () => {
  return (dispatch) => {
    getDocs(collection(db, "prueba-tecnica"))
      .then((res) => {
        const database = res.docs.map((el) => {
          return { ...el.data(), id: el.id };
        });
        dispatch(setDatabase(database));
      })
      .catch((error) => console.log(error));
  };
};
