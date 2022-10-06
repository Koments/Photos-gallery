import styled from "@emotion/styled";

export const PhotoListContainer = styled.div`
    display: grid;
    grid-template-columns: 450px 450px 450px;
    column-gap: 50px;
    row-gap: 50px;
    width: 1200px;
    margin: 0 auto;
`

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border-radius: 30px;
`

export const PhotoSprite = styled.img`
    width: 450px;
    height: 300px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`
export const PhotoInfo = styled.div`
    border-color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 10px 1rem;
    height: 25px;
    align-items: center;
`
export const PhotoNum = styled.div`
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-width: 0;
    border-style: solid;
    border-color: #dae1e7;
    border-radius: 9999px;
    background-color: #f1f5f8;
`

export const PhotoAuthor = styled.p``

export const PhotoBtn = styled.button``

export const NextPageBtn = styled.button``