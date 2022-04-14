import React from 'react';

import DeliveryMain from "./Pages/Delivery/DeliveryMain";
import Contacts from './Pages/Contacts/Contacts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPages from './Pages/AllPages/AllPages'
import Basket from './Pages/Basket/Basket';

import AdminContainer from "./AdminPage/AdminContainer/AdminContainer";
import LogInAndLogOut from './AdminPage/LogInAndLogOut/LogInAndLogOut';
import AdminAboutUs from './AdminPage/AdminAboutUs/AdminAboutUs';
import AdminContacts from './AdminPage/AdminContacts/AdminContacts';
import AdminFeedbacks from './AdminPage/AdminFeedbacks/AdminFeedbacks';
import Administrators from './AdminPage/Administrators/Administrators';

import "./index.css";

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="index" element={<AllPages/>}/>
                <Route path="delivery" element={<DeliveryMain/>}/>
                <Route path="admin" element={<AdminContainer/>}/>
                <Route path="contact" element={<AdminContacts/>}/>
                <Route path="aboutus" element={<AdminAboutUs/>}/>
                <Route path="feedbacks" element={<AdminFeedbacks/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="login" element={<LogInAndLogOut/>}/>
                <Route path="administrators" element={<Administrators/>}/>
            </Routes>
        </BrowserRouter>
          </>
  );
}

export default App;
