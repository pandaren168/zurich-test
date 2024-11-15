import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginUserState {
    name: string | null;
    email: string | null;
    avatar: string | null;
}

const initialState: LoginUserState = {
    name: null,
    email: null,
    avatar: null,
};

const loginUserSlice = createSlice({
    name: "loginUser",
    initialState,
    reducers: {
        setLoginUser: (state, action: PayloadAction<LoginUserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
        },
        clearLoginUser: (state) => {
            state.name = null;
            state.email = null;
            state.avatar = null;
        },
    },
});

export const { setLoginUser, clearLoginUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;
