import { PhotoContainer, PhotoAuthor, PhotoBtn, PhotoInfo, PhotoNum, PhotoSprite } from "../../molecules/photo-list/styled-components";
import { Photo } from "../archived-photo/types";

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
            {/* //Не сильно ли глупо будеть указывать конечном изминении на фолс именем какую функцию я выполняю для ремове */}
            {photo.archived === true ? <PhotoBtn onClick={() => removeFromStorage(photo.id)}>Remove photo from storage</PhotoBtn> : <PhotoBtn onClick={() => addToStorage(photo.id)}>Add photo to storage</PhotoBtn>}
        </PhotoContainer>
    )
}

