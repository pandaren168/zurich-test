import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/userModel";

export interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [],
};

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<{ users: User[]; page: number }>) => {
            const { users, page } = action.payload;

            if (page === 1) {
                state.users = users;
            } else {
                state.users.push(...users);
            }
        },
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
