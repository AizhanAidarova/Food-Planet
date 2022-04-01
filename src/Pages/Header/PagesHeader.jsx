import React from 'react';
import style from '../Header/PagesHeader.module.css';
import logo from '../Media/icon/Logo.svg';
import phone from '../Media/icon/phone.svg';
import cart from '../Media/icon/cart.svg';


const PagesHeader = () => {
    return (
        <header>
<<<<<<< HEAD
            <div> <img className={style.logoHeader} src={logo} /></div>
            <nav className={style.navbar}>
                <ul>
                    <li><a>Главная </a></li>
=======
            <div className="Logo"> <img className={style.logoHeader} src={logo} /></div>
            <nav className={style.navbar}>
                <ul>
                    <li><a className={style.glavnaya} >Главная </a></li>
>>>>>>> origin/Aigerim
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
<<<<<<< HEAD

=======
>>>>>>> origin/Aigerim
                            </div>
                        </div>
                    </li> */}
                    <li>
<<<<<<< HEAD
                        <select id="header-menu">
                            <option value="0">Меню</option>
=======
                        <select id="header-menu" >
                            <option className={style.selectMenu} value="0">Меню</option>
>>>>>>> origin/Aigerim
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
<<<<<<< HEAD
                    <p className={style.num}><img className={style.cart} src={cart} />1</p>
=======
                    <li className={style.num}><span><img className={style.cart} src={cart} /></span>1</li>
                   
>>>>>>> origin/Aigerim
                </ul>
            </nav>
        </header>
    );
};

export default PagesHeader;