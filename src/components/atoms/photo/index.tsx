import { Photo } from "../../molecules/archived-photo-container/types";
import { PhotoAuthor, PhotoBtn, PhotoContainer, PhotoInfo, PhotoNum, PhotoSprite } from "../archived-photo/styles-container";
import { FaHeart } from "react-icons/fa";

interface PhotoProps {
    photo: Photo;
    addToStorage: (photoId: string) => void;
    removeFromStorage: (photoId: string) => void;
}

export function PhotoCardContainer({ photo, addToStorage, removeFromStorage }: PhotoProps) {

    return (
        <PhotoContainer key={photo.id}>
            <PhotoSprite src={photo.download_url} />
            <PhotoInfo>
                <PhotoAuthor>{photo.author}</PhotoAuthor>
                <PhotoNum>#{photo.id}</PhotoNum>
            </PhotoInfo>
            {photo.archived === true ? <PhotoBtn onClick={() => removeFromStorage(photo.id)}><FaHeart style={{ color: "red" }} /></PhotoBtn> : <PhotoBtn onClick={() => addToStorage(photo.id)}><FaHeart /></PhotoBtn>}
        </PhotoContainer>
    )
}

