import React from 'react';
import PagesMenu from "../src/Pages/Menu/PagesMenu";
import PagesHeader from "./Pages/Header/PagesHeader";
import PagesMain from "./Pages/Main/PagesMain";
import Novelties from "./Pages/Novelties/Novelties";

const App = () => {
    return (
        <div>
            <PagesHeader/>
            <PagesMain/>
            <Novelties/>
            <PagesMenu/>
        </div>
    );
};

export default App;