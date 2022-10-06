export async function getData(url: string) {
    const response = await fetch(url);
    const searchResult = await response.json();
    return searchResult;
}