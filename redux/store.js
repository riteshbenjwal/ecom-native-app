import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
  },
});

export const server = "https://ecommerce-backend-app-qj8y.onrender.com/api/v1";
