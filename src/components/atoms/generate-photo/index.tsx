import { Photo } from "../../molecules/archived-photo-container/types";
import { PhotoAuthor, PhotoContainer, PhotoInfo, PhotoNum, PhotoSprite } from "./styled.components";

interface SettedPhotoProps {
    photo: Photo;
    openModal: () => void;
}

export function SettedPhoto({ photo, openModal }: SettedPhotoProps) {
    photo.download_url = `https://picsum.photos/id/${photo.id}/450/300`;

    return (
        <PhotoContainer onClick={() => openModal()}>
            <PhotoSprite src={photo.download_url} />
            <PhotoInfo>
                <PhotoAuthor>{photo.author}</PhotoAuthor>
                <PhotoNum>#{photo.id}</PhotoNum>
            </PhotoInfo>
        </PhotoContainer>
    )
}
