import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../components/atoms/archived-photo/types";

const photoSlice = createSlice({
    name: "photo",
    initialState: {
        archivedStore: [] as Photo[],
    },
    reducers: {
        archivedPhoto(state, action) {
            state.archivedStore.push({
                ...action.payload
            })
        }
    },
});

export const { archivedPhoto } = photoSlice.actions;


export default photoSlice.reducer;
