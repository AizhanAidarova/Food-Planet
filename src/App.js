import React from 'react';
import PagesHeader from './Pages/Header/PagesHeader';
import PagesMain from './Pages/Main/PagesMain';
import Novelties from './Pages/Novelties/Novelties';


const App = () => {
    return (
        <div>
            <PagesHeader/>
            <PagesMain/>
            <Novelties/>
        </div>
    );
};

export default App;