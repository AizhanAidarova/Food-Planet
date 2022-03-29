import React from 'react';
import style from '../Header/PagesHeader.module.css';
import logo from '../Media/icon/Logo.svg';
import phone from '../Media/icon/phone.svg';
import cart from '../Media/icon/cart.svg';


const PagesHeader = () => {
    return (
        <header>
            <div className="Logo"> <img className={style.logoHeader} src={logo} /></div>
            <nav className={style.navbar}>
                <ul>
                    <li><a className={style.glavnaya} >Главная </a></li>
                    {/* <li>
                        <div className="dropdown-menu">
                            <Link to="/" className='menuBtn'>
                                Меню
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <Link to="/" class="dropdown-item">Бургер</Link>
                                <Link to="/" class="dropdown-item">Суши</Link>
                                <Link to="/" class="dropdown-item">Роллы</Link>
                                <Link to="/" class="dropdown-item">Салаты</Link>
                                <Link to="/" class="dropdown-item">Десерты</Link>
                                <Link to="/" class="dropdown-item">Напитки</Link>
                            </div>
                        </div>
                    </li> */}
                    <li>
                        <select id="header-menu" class="select">
                            <option value="0">Меню</option>
                            <option value="1">Бургер</option>
                            <option value="2">Суши</option>
                            <option value="3">Роллы</option>
                            <option value="3">Салаты</option>
                            <option value="3">Десерты</option>
                            <option value="3">Напитки</option>
                        </select>
                    </li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Контакты</a></li>
                    <img className="phone" src={phone} />
                    <li><a href="#">+996500405988</a></li>
                    <p className={style.num}><img className={style.cart} src={cart} />1</p>
                </ul>
            </nav>
        </header>
    );
};

export default PagesHeader;