import React from 'react';
import PagesFooter from './Pages/Footer/PagesFooter';
import PagesAboutUs from './Pages/AboutUs/PagesAboutUs';
import PagesFeedbacks from './Pages/Feedbacks/PagesFeedbacks';


function App() {
  return (
    <div style={{maxWidth: "1600px"}}>
        <PagesAboutUs/>
        <PagesFeedbacks/>
        <PagesFooter/>
    </div>
  );
}

export default App;
