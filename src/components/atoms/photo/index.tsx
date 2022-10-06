import { PhotoContainer, PhotoAuthor, PhotoBtn, PhotoInfo, PhotoNum, PhotoSprite } from "../../molecules/photo-list/styled-components";
import { Photo } from "../archived-photo/types";

interface PhotoProps {
    photo: Photo;
    settingToPhoto: (photoId: string) => void;
}

export function PhotoCardContainer({ photo, settingToPhoto }: PhotoProps) {

    return (
        <PhotoContainer key={photo.id}>
            <PhotoSprite src={photo.download_url} />
            <PhotoInfo>
                <PhotoAuthor>{photo.author}</PhotoAuthor>
                <PhotoNum>#{photo.id}</PhotoNum>
            </PhotoInfo>
            {photo.archived === true ? <PhotoBtn onClick={() => settingToPhoto(photo.id)}>Remove photo from storage</PhotoBtn> : <PhotoBtn onClick={() => settingToPhoto(photo.id)}>Add photo to storage</PhotoBtn>}
        </PhotoContainer>
    )
}

