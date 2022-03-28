import React from 'react';
import style from "./PagesMenu.module.css";

const Menu = () => {
    return (
        <>
            <div  className={style.noveltiesNavbar}>
                <div><h2>Меню</h2></div>
                <nav>
                    <ul>
                        <li><a href="#">Пицца </a></li>
                        <li><a className={style.noveltiesBurger} href="#">Бургер</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                        <li><a href="#">Десерты</a></li>
                        <li><a href="#">Напитки</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;