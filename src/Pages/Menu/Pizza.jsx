import React, {useState} from 'react';
import style from "./PagesMenu.module.css";


const Pizza = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const dicrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div className={style.pizza}>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={props.imgURL}/>
                    <div>
                        <h3 className={style.price}>{props.title}</h3>
                        <p className={style.recipe}>{props.titleDesc}</p>
                        <h3 className={style.price}>{props.desc}</h3>
                        <button onClick={increment}> + 1</button>
                        <button onClick={dicrement}> - 1</button>
                        <p>{count}</p>
                    <button className={style.btn2}>В КОРЗИНУ</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Pizza;