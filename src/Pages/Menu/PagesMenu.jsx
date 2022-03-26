import React from "react";
import {useState} from 'react';
import margarita from "../Media/margarita.svg";
import asian from "../Media/asian.svg";
import italien from "../Media/italien.svg";
import vegetarien from "../Media/vageterien.svg";
import style from "../Menu/PagesMenu.module.css";


const App = () => {
    const[count, setCount] = useState (0);
    console.log(count);
    return(
        <div className={style.novelties}>
            <div  className={style.noveltiesNavbar}>
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
            <div className={style.pizza}>
                <div className={style.margarita}>
                    <img src={margarita} alt=""/>
                    <div>
                        <h3>Маргарита</h3>
                        <p>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3> 365 сом</h3>
                        <button onClick={()=> setCount (count +1)}> + </button>

                        <button onClick={()=> setCount (count -1)}> - </button>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={asian} alt=""/>
                    <div>
                        <h3>Азиатская</h3>
                        <p>Моцарелла, сладкий перец, томаты, красный лук, фарш из говядины</p>
                        <h3> 395 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={italien} alt=""/>
                    <div>
                        <h3>Итальянская</h3>
                        <p> Ветчина из цыпленка, сыры чеддер и пармезан, моцарелла, красный лук, чеснок</p>
                        <h3> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={vegetarien} alt=""/>
                    <div>
                        <h3>Веганская</h3>
                        <p>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={margarita} alt=""/>
                    <div>
                        <h3>Маргарита</h3>
                        <p>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={asian} alt=""/>
                    <div>
                        <h3>Азиатская</h3>
                        <p>Моцарелла, сладкий перец, томаты, красный лук, фарш из говядины</p>
                        <h3> 395 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={italien} alt=""/>
                    <div>
                        <h3>Итальянская</h3>
                        <p> Ветчина из цыпленка, сыры чеддер и пармезан, моцарелла, красный лук, чеснок</p>
                        <h3> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
                <div className={style.margarita}>
                    <img src={vegetarien} alt=""/>
                    <div>
                        <h3>Веганская</h3>
                        <p>Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус</p>
                        <h3> 365 сом</h3>
                    </div>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    )
}

export default App;