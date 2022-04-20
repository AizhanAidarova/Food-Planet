import React from 'react';
import style from "./AdminContainer.module.css";
import logoD from "../../Pages/Media/icon/logoD.svg";
import vectore from "../../Pages/Media/icon/Vectore.svg";
import order from "../../Pages/Media/icon/order.svg";
import menu from "../../Pages/Media/icon/ideas.svg";
import contact from "../../Pages/Media/icon/4. contacts.svg";
import feedback from "../../Pages/Media/icon/5. agents.svg";
import cart from "../../Pages/Media/icon/Vector.svg";
import {Link} from "react-router-dom";


const AdminContainer = () => {
    return (
        <div className={style.container}>
            <div>
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
                            <Link to={`/admin`} className={style.adminBlockLi}>Меню</Link>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={menu} alt=""/>
                            <Link to={`/adminNovelties`} className={style.adminBlockLi}>Новинки</Link>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={contact} alt=""/>
                            <Link to={`/adminContacts`} className={style.adminBlockLi}>Контакты</Link>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={feedback} alt=""/>
                            <Link to={`/feedbacks`} className={style.adminBlockLi}>Отзывы</Link>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={feedback} alt=""/>
                            <Link to={`/adminDelivery`} className={style.adminBlockLi}>Доставка</Link>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={cart} alt=""/>
                            <Link to={`/aboutus`} className={style.adminBlockLi}>О нас</Link>
                        </div>
                        <div className={style.adminBlockDiv}>
                            <img className={style.adminBlockImg} src={cart} alt=""/>
                            <Link to={`/administrators`} className={style.adminBlockLi}>Сотрудники</Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AdminContainer;