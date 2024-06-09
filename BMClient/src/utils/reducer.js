import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accountGroup: [],
    emailGroup: []
}

export const groupSlice = createSlice({
    name: 'groupReducer',
    initialState,
    reducers: {
        setNewEmailGroup: (state, action) => {
            state.emailGroup = [action.payload, ...state.emailGroup];
        },
        updateEmailGroup: (state, action) => {
            const index = state.emailGroup.findIndex(e => e.id === action.payload.id);
            if(index !== -1) {
                state.emailGroup[index] = action.payload;
            }
        },
        setNewAccountInfo: (state, action) => {
            state.accountGroup = [action.payload, ...state.accountGroup];
        },
        updateAccountInfo: (state, action) => {
            const index = state.accountGroup?.findIndex((a) => a.id === action.payload.id);
            if (index !== -1) {
                state.accountGroup[index] = action.payload;
            }
        },
    },
})

export const { setNewEmailGroup, setNewAccountInfo, updateEmailGroup, updateAccountInfo } = groupSlice.actions;
export default groupSlice.reducer;