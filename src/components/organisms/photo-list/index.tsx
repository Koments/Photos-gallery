import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { archivedPhoto, unZipPhoto, setNextPage, setPrevPage, setActivePage, setNewLimitPhotos } from "../../../store/photos-slice";
import { Photo } from "../../molecules/archived-photo-container/types";
import { Navigation } from "../../molecules/navigation-container";
import { PhotoCardContainer } from "../../atoms/photo";

import { getData } from "../../utils/api";
import { PhotoList, PhotosMainContainer } from "./styled-components";
import { Photos } from "./types";
import { mapWithArchivedPhotos } from "./utils";
const { v4: uuidv4 } = require('uuid');

export function PhotosComponent() {
    const [data, setData] = useState([] as Photo[]);
    const archivePhotosArr = useSelector<Photos, Photo[]>((state) => state.photos.archivedStore);
    const pageNum = useSelector<Photos, number>((state) => state.photos.pageNum);
    const limitPhotos = useSelector<Photos, number>((state) => state.photos.limitPhotos);
    const dispatch = useDispatch();

    const allPhotoCount = 993; // Temporary field, cause we don't have API method for counting photos

    async function loadMorePhotos(limitPhotos: number) {
        dispatch(setNewLimitPhotos(limitPhotos));
        
        let result = await getData(pageNum + 1, limitPhotos);

        result = mapWithArchivedPhotos(result, archivePhotosArr);

        setData([...data, ...result]);
    }

    async function getPhotosData() {
        let result = await getData(pageNum, limitPhotos);

        result = mapWithArchivedPhotos(result, archivePhotosArr);

        setData(result);
    }

    useEffect(() => {
        getPhotosData();
    }, [limitPhotos, pageNum]);

    function addPhotosToStorage(photoId: string) {
        data.map((photo: Photo) => {

            if (photo.id === photoId) {
                photo.archived = !photo.archived
                dispatch(archivedPhoto(photo));
            }
        })
    } //Add photos 

    function removePhotosFromStorage(photoId: string) {
        data.map((photo: Photo) => {

            if (photo.id === photoId) {
                photo.archived = !photo.archived;
                dispatch(unZipPhoto(photo));
            }
        })
    }

    return (
        <PhotosMainContainer>
            <PhotoList>
                {data.map((photo) => (
                    <PhotoCardContainer
                        key={uuidv4()}
                        photo={photo}
                        addToStorage={photoId => addPhotosToStorage(photoId)}
                        removeFromStorage={photoId => removePhotosFromStorage(photoId)}
                    />
                ))}
            </PhotoList>
            <Navigation
                photoCount={data.length}
                allPhotoCount={allPhotoCount}
                pageNum={pageNum}
                limitPhotos={limitPhotos}
                loadMorePhotos={(choice) => loadMorePhotos(choice)}
                loadPage={index => dispatch(setActivePage(index))}
                setNextPage={() => dispatch(setNextPage())}
                setPrevPage={() => dispatch(setPrevPage())}
            />
        </PhotosMainContainer>
    )
}
