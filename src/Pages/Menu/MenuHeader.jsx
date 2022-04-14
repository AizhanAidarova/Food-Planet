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
            getFood('/pizza');
        }, [])
    return (
        <>
            <div className={style.noveltiesNavbar}>
                <h2 className={style.noveltiesH2}>Меню</h2>
                <div className={style.menu}>
                <nav>
                    <ul>
                        <li onClick={() => "/pizza"}>Пицца</li>
                        <li onClick={() => "/burger"}>Бургер</li>
                        <li onClick={() => "/sushi"}>Суши</li>
                        <li onClick={() => "/roll"}>Роллы</li>
                        <li onClick={() => "/salad"}>Салаты</li>
                        <li onClick={() => "/desert"}>Десерты</li>
                        <li onClick={() => "/drinks"}>Напитки</li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className={style.menuHead}>
                {
                    food.map((item) => {
                        return(
                            <div className={style.margarita}>
                                <div>
                                    <img className={style.pizzaPic} src={item.imgUrl} alt="Pizza"/>
                                </div>
                                <div>
                                    <h3 className={style.price}>{item.title}</h3>
                                    <p className={style.recipe}>{item.titleDesc}</p>
                                    <h3 className={style.price1}>{item.desc}</h3>
                                    <div className={style.countBtn}>
                                        <button className={style.countBtn1} onClick={decrement}> - </button>
                                        <p className={style.countP}>{count}</p>
                                        <button className={style.countBtn2} onClick={increment}> + </button>
                                    </div>
                                    <button className={style.basketBtn}>В КОРЗИНУ</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
};

export default MenuHeader;