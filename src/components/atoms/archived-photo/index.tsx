import { useSelector } from "react-redux";
import { PhotoAuthor, PhotoBtn, PhotoContainer, PhotoInfo, PhotoListContainer, PhotoNum, PhotoSprite } from "../../molecules/photo-list/styled-components";
import { Photo } from "./types";

interface Photos {
    photos: {
        archivedStore: Photo[],
    }
}

export function ArchivedPhotos() {
    const archivePhotosArr = useSelector<Photos, Photo[]>(
        (state) => state.photos.archivedStore
    );

    return (
        <PhotoListContainer>
            {archivePhotosArr.map((photo) => (
                <PhotoContainer key={photo.id}>
                    <PhotoSprite src={photo.download_url} />
                    <PhotoInfo>
                        <PhotoAuthor>{photo.author}</PhotoAuthor>
                        <PhotoNum>#{photo.id}</PhotoNum>
                    </PhotoInfo>
                    {/* <PhotoBtn onClick={() => dispatch(removeFromStore(photo))}>Add photo to storage</PhotoBtn> */}
                </PhotoContainer>
            ))}
        </PhotoListContainer>
    )
}