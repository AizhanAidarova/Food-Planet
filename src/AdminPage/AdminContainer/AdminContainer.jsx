import React from 'react';
import style from "./AdminContainer.module.css";
import logoD from "../../Pages/Media/icon/logoD.svg";
import vectore from "../../Pages/Media/icon/Vectore.svg";
import order from "../../Pages/Media/icon/order.svg";
import menu from "../../Pages/Media/icon/ideas.svg";
import contact from "../../Pages/Media/icon/4. contacts.svg";
import feedback from "../../Pages/Media/icon/5. agents.svg";
import cart from "../../Pages/Media/icon/Vector.svg";
import search from "../../Pages/Media/icon/search.svg";

const AdminContainer = () => {
    return (
        <div className={style.container}>
            <div>
                {/* <div>
                    <img src="" alt=""/>
                </div> */}
                <nav className={style.adminBlock2}>
                    <ul>
                        <div className={style.container}>
                            <img src={logoD} alt=""/>
                            <h2 className={style.adminBlockLogo}>Food Planet</h2>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={vectore} alt=""/>
                            <li className={style.adminBlockLi}>Главная</li>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={order} alt=""/>
                            <li className={style.adminBlockLi}>Заказы</li>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={menu} alt=""/>
                            <li className={style.adminBlockLi}>Меню</li>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={contact} alt=""/>
                            <li className={style.adminBlockLi}>Контакты</li>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={feedback} alt=""/>
                            <li className={style.adminBlockLi}>Отзывы</li>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={cart} alt=""/>
                            <li className={style.adminBlockLi}>Сотрудники</li>
                        </div>
                    </ul>
                </nav>
            </div>
            {/* <div>
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
            </div> */}
        </div>
    );
};

export default AdminContainer;