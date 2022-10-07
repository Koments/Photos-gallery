import styled from "@emotion/styled";

export const Header = styled.header`
    background: hsl(0, 0%, 0%);
    padding: 30px;
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    color: white;

    a{
        text-decoration: none;
        margin-left: 50px;
    };

    a, a:visited, a:hover, a:active {
        color: white;
    };
`;

export const RightSideNaviganion = styled.div`
    display: flex;
`;