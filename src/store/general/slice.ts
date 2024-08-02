import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { State } from './types';

const initialState: State = {
    status: 'idle',
    closeModal:false
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setFethingStatus: (state, action) => {
            state.status = action.payload;
        },
        set_closingModal: (state, action) => {
            state.closeModal = action.payload;
        },
    },
});

export const {
    setFethingStatus,
    set_closingModal
} = generalSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export const selectClosingModal = (state: RootState) => state.general.closeModal;


export default generalSlice.reducer;