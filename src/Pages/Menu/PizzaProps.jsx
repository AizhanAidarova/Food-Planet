import React, {useState} from 'react';
import style from "./PagesMenu.module.css";


const PizzaProps = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
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
                        <h3 className={style.price1}>{props.desc}</h3>
                    <div className={style.countBtn}>
                        <button className={style.countBtn1} onClick={decrement}> - </button>
                        <p className={style.countP}>{count}</p>
                        <button className={style.countBtn2} onClick={increment}> + </button>
                    </div>
                    <button className={style.basketBtn}>В КОРЗИНУ</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PizzaProps;