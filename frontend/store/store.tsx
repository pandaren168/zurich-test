import { configureStore } from "@reduxjs/toolkit";
import loginUserReducer, { LoginUserState } from "./loginUserSlice";
import authReducer, { AuthState } from "./authSlice";
import emailReducer, { EmailState } from "./emailSlice";
import usersReducer, { UsersState } from "./usersSlice";

export interface RootState {
    loginUser: LoginUserState;
    auth: AuthState;
    emailMask: EmailState;
    users: UsersState;
}

const store = configureStore({
    reducer: {
        loginUser: loginUserReducer,
        auth: authReducer,
        emailMask: emailReducer,
        users: usersReducer,
    },
});

export default store;
