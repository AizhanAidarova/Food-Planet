import React from 'react';
import style from '../NoveltiesMenu/Novelties.module.css'

const NoveltiesMenu = () => {
    return (
        <>
            <div className={style.noveltiesNavbar}>
                <div><h2>Новинки</h2></div>
                <nav>
                    <ul>
                        <li><a href="#">Пицца </a></li>
                        <li><a className={style.noveltiesBurger} href="#">Бургер</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NoveltiesMenu;