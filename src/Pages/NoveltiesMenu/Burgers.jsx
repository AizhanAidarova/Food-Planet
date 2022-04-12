import style from '../NoveltiesMenu/Novelties.module.css';
import {LOCALHOST_URL} from '../../AdminPage/Constant/index';
import React, {useState,useEffect} from 'react';

const Burgers = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        setNumber(number - 1);
    }

    const [food, setFood] = useState([]);

    const getFood = (foodUrl) => {
        const url = LOCALHOST_URL + foodUrl

        fetch(url)
            .then((response) => response.json())
            .then ((data) => setFood(data))
    }

    useEffect(() => {
        getFood('newpizza');
    }, [])

    return (
        <>

            <div className={style.noveltiesMenu}>

                {
                    food.map((item) => {
                        return (
                            <div className={style.cheeseburger}>
                                key={item.id}
                                <img className={style.burger} src={item.img} />
                                <div>
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
                    })
                }
            </div>

        </>
    );
};

export default Burgers;
