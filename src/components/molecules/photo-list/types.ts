import { Photo } from "../../atoms/archived-photo/types";

export interface Photos {
    photos: {
        archivedStore: Photo[],
    }
}