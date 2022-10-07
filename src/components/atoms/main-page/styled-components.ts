import styled from "@emotion/styled";

export const MainContainer = styled.div`
    padding: 50px 0;
    max-width: 100%;
`;

export const MainContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    margin: 0 auto;
    
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: 535px;
    }
`;

export const MainContainerBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 23px;
`;

export const MainContainerLeft = styled.div`
    display: flex;
    text-align: center;
`;

export const MainDesc = styled.div`
    font-weight: 600;
    font-size: 42px;
    display: inline-block;
    margin: 0;

    @media (max-width: 768px) {

    }
`;

export const MainIcon = styled.img`
    position: relative;
    width: 42px;
    margin-right: 10px;
`;

export const MainImg = styled.img`
    height: auto;
    border-radius: 8px;
    box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
`;

export const FuncAppInfo = styled.ul`
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 30px;
`;

export const FuncList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 27px;
`;

export const FuncElement = styled.li`
    margin-top: 20px;
    text-align: center;
`;
