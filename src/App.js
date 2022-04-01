import React from 'react';
import Basket from './Pages/Basket/Basket';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllPages from "./Pages/AllPages/AllPages";
import DeliveryMain from "./Pages/Delivery/DeliveryMain";
import Contacts from './Pages/Contacts/Contacts';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="index" element={<AllPages/>}/>
                <Route path="delivery" element={<DeliveryMain/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path ="basket" element ={<Basket/>}/>
            </Routes>
        </BrowserRouter>
          </>
  );
}

export default App;
