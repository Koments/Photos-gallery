import styled from "@emotion/styled";

export const ArchivedPhotoListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    column-gap: 50px;
    row-gap: 50px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr; 
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr; 
    }
`;

export const NotFoundItems = styled.div`
    font-size: 100px;
    margin-top: 20%;
`;