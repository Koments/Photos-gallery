import Modal from "react-modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unZipPhoto } from "../../../store/photos-slice";
import { ArchivedPhoto } from "../../atoms/archived-photo";
import { ArchivedPhotoListContainer, NotFoundItems } from "./styled-components";
import { Photo } from "./types";
import { RenderModal } from "../../atoms/modal";
import { customStyles } from "../modal-styles";

type Photos = {
    photos: {
        archivedStore: Photo[],
    }
}

Modal.setAppElement("#root");

export function ArchivedPhotos() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalPhoto, setModalPhoto] = useState()
    const dispatch = useDispatch();

    const archivePhotosArr = useSelector<Photos, Photo[]>(
        (state) => state.photos.archivedStore
    );

    if (archivePhotosArr.length === 0) {
        return (
            <NotFoundItems>Saved photos not found</NotFoundItems>
        )
    }

    function infoForOpen(photo: any) {
        setModalPhoto(photo);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <ArchivedPhotoListContainer>
            {archivePhotosArr.map((photo) => (
                <ArchivedPhoto key={photo.id} photo={photo} removeFromStorage={() => dispatch(unZipPhoto(photo))} openModal={(photo) => infoForOpen(photo)} />
            ))}

            {!modalPhoto
            ?
                <></>
            :
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <RenderModal photo={modalPhoto} />
            </Modal>
            }
        </ArchivedPhotoListContainer>
    )
}
