import React from 'react';
import style from "./AdminContainer.module.css";

const AdminContainer = () => {
    return (
        <div className={style.container}>
            <div>
                <div>
                    <img src="" alt=""/>
                </div>
                <nav  className={style.adminBlock2}>
                    <ul>
                        <li>Главная</li>
                        <li>Заказы</li>
                        <li>Меню</li>
                        <li>Контакты</li>
                        <li>Отзывы</li>
                        <li>Сотрудники</li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2>Главная</h2>
            </div>
            <div className={style.adminBlock1}>
                <div className={style.adminBlock}>
                    <h1>Пицца</h1>
                    <p>60</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Бургер</h1>
                    <p>16</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Суши</h1>
                    <p>60</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Роллы</h1>
                    <p>68</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Салаты</h1>
                    <p>32</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Десерты</h1>
                    <p>22</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Напитки</h1>
                    <p>60</p>
                </div>
                <div className={style.adminBlock}>
                    <h1>Комбо</h1>
                    <p>6</p>
                </div>
            </div>
        </div>
    );
};

export default AdminContainer;