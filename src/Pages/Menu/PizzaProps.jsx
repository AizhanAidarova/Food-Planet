import React, {useState} from 'react';
import style from "./PagesMenu.module.css";


const PizzaProps = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const dicrement = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div>
                <div className={style.margarita}>
                    <img className={style.pizzaPic} src={props.imgUrl} alt="Pizza"/>
                    <div>
                        <h3 className={style.price}>{props.title}</h3>
                        <p className={style.recipe}>{props.titleDesc}</p>
                        <h3 className={style.price}>{props.desc}</h3>
                    <div className={style.countBtn}>
                        <button className={style.countBtn1} onClick={increment}> + </button>
                        <p>{count}</p>
                        <button className={style.countBtn2} onClick={dicrement}> - </button>
                    </div>
                    <button className={style.basketBtn}>В КОРЗИНУ</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PizzaProps;