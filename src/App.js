import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeliveryMain from "./Pages/Delivery/DeliveryMain";
import Contacts from './Pages/Contacts/Contacts';
import AllPages from './Pages/AllPages/AllPages'
import Basket from './Pages/Basket/Basket';
import Admin from "./AdminPage/Admin/Admin";
import LogInAndLogOut from './AdminPage/LogInAndLogOut/LogInAndLogOut';
import AdminAboutUs from './AdminPage/AdminAboutUs/AdminAboutUs';
import AdminContacts from './AdminPage/AdminContacts/AdminContacts';
import AdminFeedbacks from './AdminPage/AdminFeedbacks/AdminFeedbacks';
import Administrators from './AdminPage/Administrators/Administrators';
import AdminPizza from "./AdminPage/AdminContainer/AdminPizza";
import AdminBurger from "./AdminPage/AdminContainer/AdminBurger";
import AdminSushi from "./AdminPage/AdminContainer/AdminSushi";
import AdminRoll from "./AdminPage/AdminContainer/AdminRoll";
import AdminSalad from "./AdminPage/AdminContainer/AdminSalad";
import AdminDessert from "./AdminPage/AdminContainer/AdminDessert";
import AdminDrinks from "./AdminPage/AdminContainer/AdminDrinks";
import AdminNovelties from "./AdminPage/AdminNovelties/AdminNovelties";
import AdminNoveltiesPizza from "./AdminPage/AdminNovelties/AdminNoveltiesPizza";
import AdminNoveltiesBurger from "./AdminPage/AdminNovelties/AdminNoveltiesBurger";
import AdminNoveltiesDrinks from "./AdminPage/AdminNovelties/AdminNoveltiesDrinks";
import AdminNoveltiesDessert from "./AdminPage/AdminNovelties/AdminNoveltiesDessert";
import AdminNoveltiesRoll from "./AdminPage/AdminNovelties/AdminNoveltiesRoll";
import AdminNoveltiesSalad from "./AdminPage/AdminNovelties/AdminNoveltiesSalad";
import AdminNoveltiesSushi from "./AdminPage/AdminNovelties/AdminNoveltiesSushi";
import AdminDelivery from "./AdminPage/AdminDelivery/AdminDelivery";


const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="index" element={<AllPages/>}/>
                    <Route path="delivery" element={<DeliveryMain/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="contact" element={<AdminContacts/>}/>
                    <Route path="aboutus" element={<AdminAboutUs/>}/>
                    <Route path="feedbacks" element={<AdminFeedbacks/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="basket" element={<Basket/>}/>
                    <Route path="login" element={<LogInAndLogOut/>}/>
                    <Route path="administrators" element={<Administrators/>}/>
                    <Route path="adminPizza" element={<AdminPizza/>}/>
                    <Route path="adminBurger" element={<AdminBurger/>}/>
                    <Route path="adminSushi" element={<AdminSushi/>}/>
                    <Route path="adminRoll" element={<AdminRoll/>}/>
                    <Route path="adminSalad" element={<AdminSalad/>}/>
                    <Route path="adminDessert" element={<AdminDessert/>}/>
                    <Route path="adminDrinks" element={<AdminDrinks/>}/>
                    <Route path="menu" element={<Admin/>}/>
                    <Route path="adminNovelties" element={<AdminNovelties/>}/>
                    <Route path="adminNewPizza" element={<AdminNoveltiesPizza/>}/>
                    <Route path="adminNewBurger" element={<AdminNoveltiesBurger/>}/>
                    <Route path="adminNewSushi" element={<AdminNoveltiesSushi/>}/>
                    <Route path="adminNewRoll" element={<AdminNoveltiesRoll/>}/>
                    <Route path="adminNewSalad" element={<AdminNoveltiesSalad/>}/>
                    <Route path="adminNewDessert" element={<AdminNoveltiesDessert/>}/>
                    <Route path="adminNewDrinks" element={<AdminNoveltiesDrinks/>}/>
                    <Route path="administrators" element={<Administrators/>}/>
                    <Route path="adminDelivery" element={<AdminDelivery/>}/>
                    <Route path="adminContacts" element={<AdminContacts/>}/>
                </Routes>
            </BrowserRouter>
  );
}

export default App;
