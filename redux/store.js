import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: { userReducer: userReducer },
});

export const server = "https://ecommerce-backend-app-qj8y.onrender.com/api/v1";
