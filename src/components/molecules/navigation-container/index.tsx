import { Pagination } from "./components/pagination";
import { EmptyContainer, NavigationContainer, SelectContainer, SelectDesc } from "./styled-components"
import Select from "react-select";

interface NavigationProps {
    photoCount: number;
    allPhotoCount: number;
    pageNum: number;
    limitPhotos: number;
    loadMorePhotos: (choice: number) => void;
    loadPage: (index: number) => void;
    setNextPage: () => void;
    setPrevPage: () => void;
}

const options = [
    { value: 40, label: "40" },
    { value: 80, label: "80" },
];

export function Navigation({ photoCount, pageNum, allPhotoCount, limitPhotos, loadMorePhotos, loadPage }: NavigationProps) {

    return (
        <NavigationContainer>
            <EmptyContainer></EmptyContainer>
            <Pagination
                pageNum={pageNum}
                photoCount={photoCount}
                limitPhotos={limitPhotos}
                allPhotoCount={allPhotoCount}
                loadPage={loadPage}
            />
            <SelectContainer>
                <SelectDesc>Photos per page:</SelectDesc>
                <Select defaultValue={options[0]} options={options} onChange={(choice) => loadMorePhotos(choice!.value)} />
            </SelectContainer>
        </NavigationContainer>
    )
}
