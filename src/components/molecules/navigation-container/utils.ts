import { Page } from "./types";

export function getPaginationData(photoCount: number, allPhotoCount: number, pageNum: number, limitPhotos: number) {
    const pageArray: Page[] = [{
        index: 1,
        active: pageNum === 1
    }];

    const lastPageIndex = Math.floor(allPhotoCount / limitPhotos);

    // Add first filler item
    if (pageNum - 1 >= 3) {
        pageArray.push({
            index: 2,
            filler: true
        });
    }

    // Add middle pages
    if (pageNum - 1 > 1) {
        pageArray.push({
            index: pageNum - 1,
            active: false
        });
    }

    if (pageNum !== 1 && lastPageIndex !== pageNum) {
        pageArray.push({
            index: pageNum,
            active: true
        });
    }
        
    if (lastPageIndex - pageNum > 1) {
        pageArray.push({
            index: pageNum + 1,
            active: Math.round(photoCount / limitPhotos) > 1
        });
    }

    // Add second filler item
    if (lastPageIndex - pageNum >= 3 && lastPageIndex !== pageNum) {
        pageArray.push({
            index: lastPageIndex - 1,
            filler: true
        });
    }

    // Add last page
    pageArray.push({
        index: lastPageIndex,
        active: lastPageIndex === pageNum
    });

    return pageArray;
}