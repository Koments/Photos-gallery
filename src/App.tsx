import { Routes, Route } from 'react-router-dom';

import { PhotoList } from './components/molecules/photo-list';
import { AppContainer } from './styled-components';
import { ArchivedPhotos } from './components/atoms/archived-photo';
import { HeaderContainer } from './components/atoms/header';

function App() {
    return (
        <AppContainer>
            <HeaderContainer />
            <Routes>
                <Route path='/' element={<PhotoList />} />
                <Route path='/archived-photo' element={<ArchivedPhotos />} />
                {/* <Route path='*' element={<NotFoundPage />} /> */}
            </Routes>
        </AppContainer>
    );
}

export default App;