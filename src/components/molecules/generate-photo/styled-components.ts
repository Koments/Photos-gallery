import styled from "@emotion/styled";

export const RandomPhotoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RandomPhotoOptions = styled.div`
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 70px 0;

    @media (max-width: 768px) {
        width: 760px
    }
`;

export const SearchPhotoByNum = styled.div`
    font-size: 27px;
`;

export const InputForNum = styled.input`
    margin-left: 30px;
    width: 85px;
    height: 30px;
    font-size: 23px;
`;

export const NumGenerator = styled.button`
    width: 200px;
    height: 70px;
    font-size: 23px;
    background-color: black;
    color: white;
    font-weight: 700;
    cursor: pointer;
`;

export const ModalImg = styled.img``;

