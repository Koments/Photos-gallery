import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { archivedPhoto, changePage, unZipPhoto } from "../../../store/photos-slice";
import { Photo } from "../../atoms/archived-photo/types";
import { PhotoCardContainer } from "../../atoms/photo";

import { getData } from "../../utils/api";
import { NextPageBtn, PhotoListContainer } from "./styled-components";
import { Photos } from "./types";

export function PhotoList() {
    const [data, setData] = useState([] as Photo[]);
    const archivePhotosArr = useSelector<Photos, Photo[]>((state) => state.photos.archivedStore);
    const url = useSelector<Photos, string>((state) => state.photos.activePage);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getPhotosData() {
            const result = await getData(url);
            result.map((actualPhoto: Photo) => {
                archivePhotosArr.map((archivedPhotos) => {
                    if (actualPhoto.id === archivedPhotos.id) {
                        actualPhoto.archived = true;
                    }
                    if (actualPhoto.archived === undefined) {
                        actualPhoto.archived = false;
                    }
                })
            })

            setData(result);
        }

        getPhotosData();
    }, []);

    function addInfoToStorage(photoId: string) {
        data.map((photo: Photo) => {
            if (photo.id === photoId) {
                photo.archived = !photo.archived
                dispatch(archivedPhoto(photo));
            }
        })
    }

    function removeInfoFromStorage(photoId: string) {
        data.map((photo: Photo) => {
            if (photo.id === photoId) {
                photo.archived = !photo.archived
                dispatch(unZipPhoto(photo));
            }
        })
    }

    return (
        <PhotoListContainer>
            {data.map((photo) => (
                <PhotoCardContainer key={photo.id} photo={photo} addToStorage={(photoId) => addInfoToStorage(photoId)} removeFromStorage={(photoId) => removeInfoFromStorage(photoId)} />
            ))}
            <NextPageBtn onClick={() => { dispatch(changePage(1)) }}>Next</NextPageBtn>
        </PhotoListContainer>
    )
}