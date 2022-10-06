import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { archivedPhoto } from "../../../store/photos-slice";
import { Photo } from "../../atoms/archived-photo/types";
import { PhotoCardContainer } from "../../atoms/photo";

import { getData } from "../../utils/api";
import { NextPageBtn, PhotoListContainer } from "./styled-components";
import { Photos } from "./types";

export function PhotoList() {
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState(`https://picsum.photos/v2/list?page=${page}&limit=12`);
    const [data, setData] = useState([] as Photo[]);
    const archivePhotosArr = useSelector<Photos, Photo[]>((state) => state.photos.archivedStore);
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
    }, [setUrl]);
    
    console.log(url)

    function changesPhoto(photoId: string) {
        data.map((photo: Photo) => {
            if (photo.id === photoId) {
                photo.archived = !photo.archived
                dispatch(archivedPhoto(photo));
            }
        })
    }

    return (
        <PhotoListContainer>
            {data.map((photo) => (
                <PhotoCardContainer key={photo.id} photo={photo} settingToPhoto={(photoId) => changesPhoto(photoId)} />
            ))}
            <NextPageBtn onClick={() => { setPage(page + 1); setUrl(`https://picsum.photos/v2/list?page=${page + 1}&limit=12`) }}>Next</NextPageBtn>
        </PhotoListContainer>
    )
}