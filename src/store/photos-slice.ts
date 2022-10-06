//Уточнить как передать новую страницу

import { createSlice } from "@reduxjs/toolkit";
import { Photo } from "../components/atoms/archived-photo/types";

const photoSlice = createSlice({
    name: "photo",
    initialState: {
        archivedStore: [] as Photo[],
        activePage: 'https://picsum.photos/v2/list?page=1&limit=12'
    },
    reducers: {
        archivedPhoto(state, action) {
            state.archivedStore.push({
                ...action.payload
            })
        }, changePage(state, action) {
            //!
            // const urlSplit = state.activePage.split('page=');
            // const urlSecondSplit = urlSplit[1].split('&')
            // const newPage = parseInt(urlSecondSplit[0]) + action.payload
        }, unZipPhoto(state, action){
            state.archivedStore = state.archivedStore.filter((notes) => notes.id !== action.payload.id);
        }
        
    },
});

export const { archivedPhoto, changePage, unZipPhoto } = photoSlice.actions;


export default photoSlice.reducer;
