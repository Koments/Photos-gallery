import { Photo } from "../../molecules/archived-photo-container/types";

export interface Photos {
    photos: {
        archivedStore: Photo[],
        pageNum: number,
        limitPhotos: number
    }
}