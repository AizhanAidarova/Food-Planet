
import React, { useEffect, useState } from 'react';
import style from '../NoveltiesMenu/Novelties.module.css';
import { LOCALHOST_URL } from '../../AdminPage/Constant';


const GoodsCard = ({item}) => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        if (number >0){
            setNumber(number - 1)
        }
    }


    return (
                        
        <div key={item.id} className={style.cheeseburger}>
            <img className={style.burger} src={item.img} />
            <div className={style.divchese}>
                <h3 className={style.burgerH3}>{item.name}</h3>
                <p className={style.noveltiesMenuP}>{item.desc}</p>
                <p><b>{item.price}</b></p>
            </div>
            <div className={style.btn}>
                <button className={style.btn1} onClick={decrement}>-</button>
                <p>{number}</p>
                <button className={style.btn2} onClick={increment}>+</button>
            </div>
            <button className={style.btn3}>В КОРЗИНУ</button>
        </div>
    )
}



const NoveltiesMenu = () => {

    const [food, setFood] = useState([]);

    const getFood = (foodUrl) => {
        const url = LOCALHOST_URL + foodUrl
       
        fetch(url)
            .then((response) => response.json())
            .then((data) => setFood(data))
    }

    useEffect(() => {
        getFood('/newburger');
    }, [])
    

    return (
        <>
            <div className={style.noveltiesNavbar}>
                <div><h2>Новинки</h2></div>
                <nav>
                    <ul>
                        <li onClick={() => getFood('/newpizza')} >Пицца</li>
                        <li onClick={() => getFood('/newburger')} className={style.noveltiesBurger} href="#">Бургер</li>
                        <li onClick={() => getFood('/newsushi')}>Суши</li>
                        <li onClick={() => getFood('/newroll')}>Роллы</li>
                        <li onClick={() => getFood('/newsalad')}>Салаты</li>
                        <li onClick={() => getFood('/newdesert')}>Десерты</li>
                        <li onClick={() => getFood('/newdrinks')}>Напитки</li>
                    </ul>
                </nav>

            </div>
            {
                food.map((item) => {
                   return <GoodsCard key={item.id} item={item}/> 
                })
            }
        </>
    );
};

export default NoveltiesMenu;