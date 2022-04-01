import React from 'react';


import DeliveryMain from "./Pages/Delivery/DeliveryMain";
import Contacts from './Pages/Contacts/Contacts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPages from './Pages/AllPages/AllPages'
import Basket from './Pages/Basket/Basket';


const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="index" element={<AllPages/>}/>
                <Route path="delivery" element={<DeliveryMain/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
          </>
  );
}

export default App;
