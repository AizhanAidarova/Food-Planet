import style from '../NoveltiesMenu/Novelties.module.css';
import { useState } from "react";


const Burgers = (props) => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }
    const decrement = () => {
        setNumber(number - 1);
    }
    return (
        <>

            <div className={style.noveltiesMenu}>
                <div className={style.cheeseburger}>
                    <img className={style.burger} src={props.imageUrl} alt="" />
                    <div>
                        <h3>{props.title}</h3>
                        <p className={style.noveltiesMenuP}>{props.titleDesc}</p>
                        <p><b>{props.desc}</b></p>
                    </div>
                    <div className={style.btn}>
                        <button className={style.btn1} onClick={increment}>-</button>
                        <p>{number}</p>
                        <button className={style.btn2} onClick={decrement}>+</button>
                    </div>
                    <button className={style.btn3}>В КОРЗИНУ</button>
                </div>
            </div>

        </>
    );
};

export default Burgers;
