import React from 'react';
import search from "../../Pages/Media/icon/search.svg";
import AdminContainer from "../AdminContainer/AdminContainer";
import style from "../AdminContainer/AdminContainer.module.css";
import {Link} from "react-router-dom";

const Admin = () => {
    return (
           <div className={style.admin}>
               <AdminContainer/>
               <div className={style.menuMarginRight}>
                   <div className={style.container}>
                       <h2>Меню</h2>
                   </div>
                   <div className={style.adminBlock1}>
                       <div>
                           <Link to={`/adminPizza`}><li><a className={style.adminBlock} >Пицца </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminBurger`}><li><a className={style.adminBlock} >Бургеры </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminSushi`}><li><a className={style.adminBlock} >Суши </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminRoll`}><li><a className={style.adminBlock} >Роллы </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminSalad`}><li><a className={style.adminBlock} >Салат </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminDessert`}><li><a className={style.adminBlock} >Десерт </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminDrinks`}><li><a className={style.adminBlock} >Напитки </a></li></Link>
                       </div>
                       <div>
                           <Link to={`/adminCombo`}><li><a className={style.adminBlock} >Комбо </a></li></Link>
                       </div>
                   </div>
               </div>
           </div>
    );
};

export default Admin;