import styled from "@emotion/styled";

export const PhotosMainContainer = styled.div``;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    column-gap: 50px;
    row-gap: 50px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr; 
    }

    @media (max-width: 1024px) {
       grid-template-columns: 1fr;
       margin: 0 auto;
       width: 450px;
       display: flex;
       flex-direction: column;
       align-items: center;
    }
`;