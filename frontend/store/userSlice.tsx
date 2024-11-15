import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string | null;
    email: string | null;
    avatar: string | null;
}

const initialState: UserState = {
    name: null,
    email: null,
    avatar: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
        },
        clearUser: (state) => {
            state.name = null;
            state.email = null;
            state.avatar = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
