import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../components/molecules/archived-photo-container/types";

const photoSlice = createSlice({
    name: "photo",
    initialState: {
        archivedStore: [] as Photo[],
        pageNum: 1 as number,
        limitPhotos: 40 as number,
    },
    reducers: {
        archivedPhoto(state, action) {
            state.archivedStore.push({
                ...action.payload
            })
        }, 
        
        setNewLimitPhotos(state, action) {
            state.limitPhotos = action.payload;
        },

        setNextPage(state) {
            state.pageNum += 1;
        }, 

        setPrevPage(state) {
            state.pageNum -= 1;
        },

        setActivePage(state, action) {
            state.pageNum = action.payload;
        },

        unZipPhoto(state, action) {
            state.archivedStore = state.archivedStore.filter((notes) => notes.id !== action.payload.id);
        }

    },
});

export const { archivedPhoto, setNewLimitPhotos, setNextPage, setPrevPage, setActivePage, unZipPhoto } = photoSlice.actions;


export default photoSlice.reducer;
