import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    
    @media (max-width: 1200px) {
        order: 2;
        margin: 50px 0 0 0px;
    }
`;

export const PaginationItem = styled.div`
    z-index: 5;
    display: inline-block;
    min-width: 48px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    text-align: center;
    font-size: 27px;
    line-height: 40px;
    font-weight: 700;

    &:hover{
        border-color: #3e77aa !important;
        color: red !important;
    }
`;