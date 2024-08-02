import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { State } from './types';

const initialState: State = {
    status: 'idle',
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setFethingStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const {
    setFethingStatus,
} = generalSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export default generalSlice.reducer;