import { Photo } from "../../molecules/archived-photo-container/types";

export function mapWithArchivedPhotos(photos: Photo[], archivePhotos: Photo[]) {

    photos.map((actualPhoto: Photo) => {
        actualPhoto.download_url = `https://picsum.photos/id/${actualPhoto.id}/450/300`;

        const archivedPhoto = archivePhotos.find(arch => actualPhoto.id === arch.id); //checking photos for archiving

        actualPhoto.archived = archivedPhoto !== undefined;

        return actualPhoto;
    });

    return photos;
}