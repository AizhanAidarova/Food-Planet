import React from 'react';
import style from "../AdminContainer/AdminContainer.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";
import search from "../../Pages/Media/icon/search.svg";
import {Link} from "react-router-dom";

const AdminNovelties = () => {
    return (
        <div className={style.admin}>
            <AdminContainer/>
            <div className={style.menuMarginRight}>
                <div className={style.container}>
                    <h2>Новинкиd</h2>
                </div>
                <div className={style.adminBlock1}>
                    <div>
                        <Link to={`/adminNewPizza`}><li><a className={style.adminBlock} >Пицца </a></li></Link>
                    </div>
                    <div>
                        <Link to={`/adminNewBurger`}><li><a className={style.adminBlock} >Бургеры </a></li></Link>
                    </div>
                    <div>
                        <Link to={`/adminNewSushi`}><li><a className={style.adminBlock} >Суши </a></li></Link>
                    </div>
                    <div>
                        <Link to={`/adminNewRoll`}><li><a className={style.adminBlock} >Роллы </a></li></Link>
                    </div>
                    <div>
                        <Link to={`/adminNewSalad`}><li><a className={style.adminBlock} >Салат </a></li></Link>
                    </div>
                    <div>
                        <Link to={`/adminNewDessert`}><li><a className={style.adminBlock} >Десерт </a></li></Link>
                    </div>
                    <div>
                        <Link to={`/adminNewDrinks`}><li><a className={style.adminBlock} >Напитки </a></li></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AdminNovelties;