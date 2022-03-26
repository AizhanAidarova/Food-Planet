
import PagesMenu from "../src/Pages/Menu/PagesMenu";
import React from 'react';
import PagesFooter from './Pages/Footer/PagesFooter';
import PagesAboutUs from './Pages/AboutUs/PagesAboutUs';
import PagesFeedbacks from './Pages/Feedbacks/PagesFeedbacks';


const App = () => {
    return (
        <>
        <div>
            <PagesMenu/>
        </div>


    <div style={{maxWidth: "1600px"}}>
        <PagesAboutUs/>
        <PagesFeedbacks/>
        <PagesFooter/>
    </div>
          </>
  );
}

export default App;
