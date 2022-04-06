import React from 'react';
import style from '../Header/PagesHeader.module.css';
import logo from '../Media/icon/Logo.svg';
import phone from '../Media/icon/phone.svg';
import cart from '../Media/icon/cart.svg';
import { Link } from "react-router-dom"


const PagesHeader = () => {
    return (
        <>
            <header className={style.header}>
                <div className="Logo"> <img className={style.logoHeader} src={logo} /></div>
                <nav className={style.navbar}>
                    <ul>
                        <Link to={`/index`}><li><a className={style.glavnaya} >Главная </a></li></Link>
                        <li>
                            <select className={style.menuSelect} id="header-menu" >
                                <option className={style.selectMenu} value="0">Меню</option>
                                <option value="1">Бургер</option>
                                <option value="2">Суши</option>
                                <option value="3">Роллы</option>
                                <option value="3">Салаты</option>
                                <option value="3">Десерты</option>
                                <option value="3">Напитки</option>
                            </select>
                        </li>
                        <Link to={`/delivery`}><li><a href="#">Доставка</a></li></Link>
                        <Link to={`/contacts`}><li><a href="#">Контакты</a></li></Link>
                        <img className="phone" src={phone} />
                        <li><a href="#">+996500405988</a></li>
                        <Link to={`/basket`}><li className={style.num}><span><img className={style.cart} src={cart} /></span>1</li></Link>

                    </ul>
                </nav>
            </header>
        </>
    );
};

export default PagesHeader;