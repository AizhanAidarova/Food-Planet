import React from 'react';

import DeliveryMain from "./Pages/Delivery/DeliveryMain";
import Contacts from './Pages/Contacts/Contacts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPages from './Pages/AllPages/AllPages'
import Basket from './Pages/Basket/Basket';

import AdminContainer from "./AdminPage/AdminContainer/AdminContainer";
import LogInAndLogOut from './AdminPage/LogInAndLogOut/LogInAndLogOut';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="index" element={<AllPages/>}/>
                <Route path="delivery" element={<DeliveryMain/>}/>
                <Route path="admin" element={<AdminContainer/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="login" element={<LogInAndLogOut/>}/>
            </Routes>
        </BrowserRouter>
          </>
  );
}

export default App;
