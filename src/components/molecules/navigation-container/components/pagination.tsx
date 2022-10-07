import { getPaginationData } from "../utils";
import { PaginationContainer, PaginationItem } from "./styled-components";

interface PaginationProps {
    photoCount: number;
    allPhotoCount: number;
    pageNum: number;
    limitPhotos: number;
    loadPage: (index: number) => void;
}

export function Pagination({ photoCount, allPhotoCount, pageNum, limitPhotos, loadPage }: PaginationProps) {
    const paginationData = getPaginationData(photoCount, allPhotoCount, pageNum, limitPhotos);

    return (
        <PaginationContainer>
            {paginationData.map(paginationItem => (
            <PaginationItem
                    key={paginationItem.index}
                    style={{ color: paginationItem.active ? "#3e77aa" : "black", borderColor: paginationItem.filler ? "white" : "black", cursor: paginationItem.filler ? "unset" : "pointer",  }}
                    onClick={() => {

                        if (!paginationItem.filler)
                            loadPage(paginationItem.index)
                    }}
                >
                    {paginationItem.filler ? "..." : paginationItem.index}
                </PaginationItem>
            ))}
        </PaginationContainer>
    )
}