import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllPages from "./Pages/AllPages/AllPages";
import DeliveryMain from "./Pages/Delivery/DeliveryMain";


import PagesFooter from './Pages/Footer/PagesFooter';
import PagesAboutUs from './Pages/AboutUs/PagesAboutUs';
import PagesFeedbacks from './Pages/Feedbacks/PagesFeedbacks';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="index" element={<AllPages/>}/>
                <Route path="delivery" element={<DeliveryMain/>}/>
            </Routes>
        </BrowserRouter>



    <div style={{maxWidth: "1600px"}}>
        <PagesAboutUs/>
        <PagesFeedbacks/>
        <PagesFooter/>
    </div>
          </>
  );
}

export default App;