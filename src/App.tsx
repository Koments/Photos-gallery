import { Routes, Route } from 'react-router-dom';

import { PhotosComponent } from './components/organisms/photo-list';
import { ArchivedPhotos } from './components/molecules/archived-photo-container';
import { HeaderContainer } from './components/atoms/header';
import { RandomPhoto } from './components/molecules/generate-photo';
import { AppContainer, PhotosContainer } from './styled-components';
import { PageNotFound } from './components/atoms/page-not-found';
import { MainPage } from './components/atoms/main-page';

function App() {
    return (
        <AppContainer>
            <HeaderContainer />
            <PhotosContainer>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/photo-list' element={<PhotosComponent />} />
                    <Route path='/archived-photo' element={<ArchivedPhotos />} />
                    <Route path='/random-photo' element={<RandomPhoto />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </PhotosContainer>
        </AppContainer>
    );
}

export default App;

