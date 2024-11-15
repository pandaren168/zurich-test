import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserState } from "./userSlice";
import authReducer, { AuthState } from "./authSlice";

export interface RootState {
    user: UserState;
    auth: AuthState;
}

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
});

export default store;
