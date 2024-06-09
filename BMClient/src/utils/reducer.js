import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailGroup: [], //Array of objects{id, name, recipients} containing comapny details
    companyGroup: [],
}

export const groupSlice = createSlice({
    name: 'emailData',
    initialState,
    reducers: {
        setNewEmailGroup: (state, action) => {
            state.emailGroup = [action.payload, ...state.emailGroup];
        },

        addNewEmailData: (state, action) => {
            state.emailGroup = state.emailGroup.map((data) => {
                
                if(action.payload.groupID === data.id){
                    data.recipients = [data.recipients, ...action.payload.recipient];
                }

                return data;
            })
        },

        setNewCompanyGroup: (state, action) => {
            state.companyGroup = [action.payload,...state.companyGroup];
        },
    }
})

export const {addNewEmailData, setNewCompanyGroup, setNewEmailGroup} = groupSlice.actions;

export default groupSlice.reducer;
