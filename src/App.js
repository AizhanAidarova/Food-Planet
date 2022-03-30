import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllPages from "./Pages/AllPages/AllPages";
import DeliveryMain from "./Pages/Delivery/DeliveryMain";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="index" element={<AllPages/>}/>
                <Route path="delivery" element={<DeliveryMain/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default App;