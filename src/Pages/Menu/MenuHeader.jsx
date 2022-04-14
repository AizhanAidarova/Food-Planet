import React, {useEffect, useState} from 'react';
import style from "./PagesMenu.module.css";
import {LOCALHOST_URL} from "../../AdminPage/Constant";

const MenuHeader = () => {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1)
        }
        const decrement = () => {
            if (count >1){
                setCount(count - 1)
            }
        }
        const [food, setFood] = useState([]);

        const getFood = (foodUrl) => {
            const url = LOCALHOST_URL + foodUrl;

            fetch(url)
                .then((response) => response.json())
                .then ((data) => setFood(data))
        }

        useEffect(() => {
            getFood('/newburger');
        }, [])
    return (
        <>
            <div className={style.noveltiesNavbar}>
                <div><h2 className={style.noveltiesH2}>Меню</h2></div>
                <div className={style.menu}>
                <nav>
                    <ul>
                        <li onClick={() => getFood("/newpizza") }>Пицца</li>
                        <li onClick={() => getFood("/newburger")}>Бургер</li>
                        <li onClick={() => getFood("/newsushi")}>Суши</li>
                        <li onClick={() => getFood("/newroll")}>Роллы</li>
                        <li onClick={() => getFood("/newpizza")}>Салаты</li>
                        <li onClick={() => getFood("/newpizza")}>Десерты</li>
                        <li onClick={() => getFood("/newpizza")}>Напитки</li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className={style.menuHead}>
                {
                    food.map((item) => {
                        return(
                            <div className={style.margarita}>
                                <img className={style.pizzaPic} src={item.imgUrl} alt="Pizza"/>
                                <div>
                                    <h3 className={style.price}>{item.title}</h3>
                                    <p className={style.recipe}>{item.titleDesc}</p>
                                    <p><b>{item.desc}</b></p>
                                </div>
                                <div className={style.countBtn}>
                                    <button className={style.countBtn1} onClick={decrement}> - </button>
                                    <p className={style.countP}>{count}</p>
                                    <button className={style.countBtn2} onClick={increment}> + </button>
                                </div>
                                <button className={style.basketBtn}>В КОРЗИНУ</button>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
};

export default MenuHeader;