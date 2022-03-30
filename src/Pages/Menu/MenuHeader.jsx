import React from 'react';
import style from "./PagesMenu.module.css";

const MenuHeader = () => {
    return (
        <>
            <div className={style.noveltiesNavbar}>
                <h2>Меню</h2>
                <div className={style.menu}>
                <nav>
                    <ul>
                        <li><a href="#">Пицца </a></li>
                        <li><a href="#">Бургер</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                        <li><a href="#">Десерты</a></li>
                        <li><a href="#">Напитки</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </>
    );
};

export default MenuHeader;