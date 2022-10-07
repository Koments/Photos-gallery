import { Photo } from "../../molecules/archived-photo-container/types";
import { PhotoAuthor, PhotoBtn, PhotoContainer, PhotoInfo, PhotoNum, PhotoSprite } from "./styles-container"; 
import { FaHeart } from "react-icons/fa";

interface PhotoProps {
    photo: Photo;
    removeFromStorage: () => void;
    openModal: (photo: any) => any;
}

export function ArchivedPhoto({ photo, removeFromStorage, openModal }: PhotoProps) {

    return (
        <PhotoContainer>
            <PhotoSprite onClick={() => openModal(photo)} src={photo.download_url} />
            <PhotoInfo>
                <PhotoAuthor>{photo.author}</PhotoAuthor>
                <PhotoNum>#{photo.id}</PhotoNum>
            </PhotoInfo>
            <PhotoBtn onClick={() => removeFromStorage()} ><FaHeart /></PhotoBtn>
        </PhotoContainer>
    )
}