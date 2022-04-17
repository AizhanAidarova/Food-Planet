/*
import React, {useState,useEffect} from 'react';
import style from "./PagesMenu.module.css";
import {LOCALHOST_URL} from "../../AdminPage/Constant/index";


/!*const PizzaProps = () => {
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
        getFood('pizza');
    }, [])*!/
    return (
        <>
            <div>
                {
                    food.map((item) => {
                        return(
                            <div className={style.margarita}>
                                <img className={style.pizzaPic} src={item.imgUrl} alt="Pizza"/>
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
export default PizzaProps;*/
