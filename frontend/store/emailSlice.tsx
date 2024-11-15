import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EmailState {
    [key: string]: boolean;
}

const initialState: EmailState = {};

const emailSlice = createSlice({
    name: "emailMask",
    initialState,
    reducers: {
        setEmailMask: (state, action: PayloadAction<string>) => {
            const userId = action.payload;
            const isEmailMasked: boolean = state[userId] ?? true;
            state[userId] = !isEmailMasked;
        },
    },
});

export const { setEmailMask } = emailSlice.actions;
export default emailSlice.reducer;
