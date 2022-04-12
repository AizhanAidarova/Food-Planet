import React from 'react';
import style from "../AdminContainer/AdminContainer.module.css";
import search from "../../Pages/Media/icon/search.svg";

const Admin = () => {
    return (
            <div>
                <div className={style.container}>
                    <h2>Главная</h2>
                    <div>
                        <input  className={style.search}type="search"/>
                        <img src={search} alt=""/>
                    </div>
                </div>
                <div className={style.adminBlock1}>
                    <div className={style.adminBlock}>
                        <h2>Пицца</h2>
                        <p>60</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Бургер</h2>
                        <p>16</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Суши</h2>
                        <p>60</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Роллы</h2>
                        <p>68</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Салаты</h2>
                        <p>32</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Десерты</h2>
                        <p>22</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Напитки</h2>
                        <p>60</p>
                    </div>
                    <div className={style.adminBlock}>
                        <h2>Комбо</h2>
                        <p>6</p>
                    </div>
                </div>
            </div>
    );
};

export default Admin;