import styled from "@emotion/styled";

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0 100px;

    @media (max-width: 1200px) {
        flex-direction: column;
        display: flex;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        display: flex;
    }
`;

export const LoadNewPhotos = styled.button``;

export const EmptyContainer = styled.div``;

export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: 700;

    @media (max-width: 1200px) {
        justify-content: flex-end;
    }
    
    @media (max-width: 1024px) {
        margin-right: -120px;
    }
`;

export const SelectDesc = styled.div`
    margin-right: 20px;
`;