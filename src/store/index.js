import { configureStore } from "@reduxjs/toolkit";
import database from "./slices/database";

export default configureStore({
  reducer: {
    database,
  },
});
