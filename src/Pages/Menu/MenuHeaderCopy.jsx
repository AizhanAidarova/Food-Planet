/*
import React, { useEffect, useState} from 'react';
import style from "./PagesMenu.module.css";
import {LOCALHOST_URL} from "../../AdminPage/Constant";


const GoodsCard = ({item}) => {
    const [count, setCount] = useState(0);

    const addCart = () => {
        let cartStorage = localStorage.getItem('cart');

        const id = item.id;
        let object = {
            [id]: {
                ...item,
                count
            }
        }

        if(cartStorage){
            cartStorage = JSON.parse(cartStorage);
            object = {
                ...object,
                ...cartStorage
            }

        }
        localStorage.setItem("cart", JSON.stringify(object));
    };

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }
    return (

        <div key={item.id} className={style.margarita}>
            <img className={style.pizzaPic} src={item.img} alt="Pizza"/>
            <div>
                <h3 className={style.price}>{item.name}</h3>
                <p className={style.recipe}>{item.desc}</p>
                <p className={style.price1}>{item.price}</p>
            </div>
            <div className={style.countBtn}>
                <button className={style.countBtn1} onClick={decrement}> - </button>
                <p className={style.countP}>{count}</p>
                <button className={style.countBtn2} onClick={increment}> + </button>
            </div>
            <button className={style.basketBtn} onClick={() => addCart(item)}>В КОРЗИНУ</button>
        </div>
    )
}
const MenuHeader = () => {

    const [food, setFood] = useState([]);

    const getFood = (foodUrl) => {
        const url = LOCALHOST_URL + foodUrl;

        fetch(url)
            .then(response => {
                if(response.status === 200){
                    return response.json();
                }else {
                    alert('Smth wrong');
                }
            })
            .then ((data) => setFood(data))
    }
    useEffect(() => {
        getFood('/pizza');
    }, [])

    return (

        <>
            <div className={style.noveltiesNavbar}>
                <div><h2 className={style.noveltiesH2}>Меню</h2></div>
                <div className={style.menu}>
                    <nav>
                        <ul>
                            <li onClick={() => getFood("/pizza") }>Пицца</li>
                            <li onClick={() => getFood("/burger")}>Бургер</li>
                            <li onClick={() => getFood("/sushi")}>Суши</li>
                            <li onClick={() => getFood("/roll")}>Роллы</li>
                            <li onClick={() => getFood("/salad")}>Салаты</li>
                            <li onClick={() => getFood("/desert")}>Десерты</li>
                            <li onClick={() => getFood("/drinks")}>Напитки</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={style.menuHead}>
                {
                    food.map((item) => {
                        return <GoodsCard item = {item}/>
                    })
                }
            </div>

        </>
    );
};

export default MenuHeader;*/
