import { FuncAppInfo, FuncElement, FuncList, MainContainer, MainContainerBody, MainContainerHeader, MainContainerLeft, MainDesc, MainImg } from "./styled-components";

export function MainPage() {

    return (
        <MainContainer>
            <MainContainerHeader>
                <MainContainerLeft >
                    <MainDesc> Site by with <br /> Lorem Picsum</MainDesc>
                </MainContainerLeft>
                <MainContainer>
                    <MainImg src="/images/main-img.jpg" alt="Lorem Picsum" />
                </MainContainer>
            </MainContainerHeader>
            <MainContainerBody>
                <FuncAppInfo>Functionality supported by this application:</FuncAppInfo>
                <FuncElement>Adaptive layout for: tablets, netbooks, laptops</FuncElement>
                <FuncElement>Processing takes place only on the browser side.</FuncElement>
                <FuncElement>Personal designы.</FuncElement>
                <FuncList>Photo List:
                    <FuncElement>Ability to add your favorite photo to the vault.</FuncElement>
                    <FuncElement>Switch between photo list pages.</FuncElement>
                    <FuncElement>Multiple functionalities.</FuncElement>
                    <FuncElement>Page pagination.</FuncElement>
                </FuncList>
                <FuncList>Generate photo:
                    <FuncElement>Random photo output.</FuncElement>
                    <FuncElement>Delete photos from storage.</FuncElement>
                    <FuncElement>Displaying a photo by a given number.</FuncElement>
                    <FuncElement>Possibility to view the photo in the modal window.</FuncElement>
                    <FuncElement>Display the number of pages based on the selected number of photos.</FuncElement>
                </FuncList>
                <FuncList>Storage:
                    <FuncElement>Delete photos from storage.</FuncElement>
                    <FuncElement>Possibility to view the photo in the modal window.</FuncElement>
                </FuncList>
            </MainContainerBody>
        </MainContainer>
    )
}