export async function getData(pageNum: number, limitPhotos: number) {
    const url = `https://picsum.photos/v2/list?page=${pageNum}&limit=${limitPhotos}`;

    const response = await fetch(url);
    const searchResult = await response.json();

    return searchResult;
}

export async function getRandomPhoto(photoNum: number) {
    const url = `https://picsum.photos/id/${photoNum}/info`;

    const response = await fetch(url);
    const searchResult = await response.json();

    return searchResult;
}