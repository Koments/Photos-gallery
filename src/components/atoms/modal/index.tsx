import { Photo } from "../../molecules/archived-photo-container/types"
import { ModalContainer, ModalImg } from "./styled-components"

interface ModalProps {
    photo: Photo
}

export function RenderModal({ photo }: ModalProps){

    return (
        <ModalContainer>
            <ModalImg src={photo.download_url} />
        </ModalContainer>
    )
}