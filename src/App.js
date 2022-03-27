
import PagesMenu from "../src/Pages/Menu/PagesMenu";
import React from 'react';
import PagesFooter from './Pages/Footer/PagesFooter';
import PagesAboutUs from './Pages/AboutUs/PagesAboutUs';
import PagesFeedbacks from './Pages/Feedbacks/PagesFeedbacks';

import PagesHeader from "./Pages/Header/PagesHeader";
import PagesMain from "./Pages/Main/PagesMain";
import Novelties from "./Pages/Novelties/Novelties";

const App = () => {
    return (
        <>

            <PagesHeader/>
            <PagesMain/>
            <Novelties/>


    <div style={{maxWidth: "1600px"}}>
        <PagesAboutUs/>
        <PagesFeedbacks/>
        <PagesFooter/>
    </div>
          </>
  );
}

export default App;