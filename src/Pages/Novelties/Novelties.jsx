import React from 'react';
import style from '../Novelties/Novelties.module.css';
import burger1 from '../Media/img/burger1.svg';
import burger2 from '../Media/img/burger2.svg';
import burger3 from '../Media/img/burger3.svg';
import burger4 from '../Media/img/burger4.svg';



const Novelties = () => {
    return (
        <div className={style.novelties}>
            <div className={style.noveltiesNavbar}>
                <div><h2>Новинки</h2></div>
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
            <div className={style.noveltiesMenu}>
                <div className={style.cheeseburger1}>
                    <img className={style.burger1} src={burger1} alt="" />
                    <h3>Двойной чизбургер</h3>
                    <p>Булка, котлета,сыр,  соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль,кетчуп, майонез</p>
                    <p>200  сом</p>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.cheeseburger2}>
                    <img className={style.burger2} src={burger2} alt="" />
                    <h3>Чизбургер</h3>
                    <p>Горчичный соус, кетчуп, стрипсы, лук, сыр Чеддер, огурцы, салат айсберг булочка, кетчуп, майонез</p>
                    <p>200  сом</p>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.cheeseburger3}>
                    <img className={style.burger3} src={burger3} alt="" />
                    <h3>Шеф Бургер</h3>
                    <p>Острая курочка, листья салата, маринованные огурчики,кетчуп, майонез, лук, соус «Бургер» и булочка!</p>
                    <p>200  сом</p>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.cheeseburger4}>
                    <img className={style.burger4} src={burger4} alt="" />
                    <h3>Чизбургер "Де Люкс"</h3>
                    <p>Горчичный соус, кетчуп, филе в панировке, лук, сыр Чеддер, огурцы, булочка, свежий салат и ломтики помидора.</p>
                    <p>200  сом</p>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
            </div>
            
        </div>
    );
};

export default Novelties;