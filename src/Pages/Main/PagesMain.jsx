import React from 'react';
import style from '../Main/PagesMain.module.css';
import combo from '../Media/img/combo.svg';
import arrow2 from '../Media/icon/arrow2.svg'

const PagesMain = () => {
    return (
        <div className={style.main}>
            <div className={style.text}>
                <p className={style.textP}>Доставка вкусной еды до 30 минут + напиток в подарок!</p>
                <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                <button className={style.btn}>ПЕРЕЙТИ В МЕНЮ<img className={style.arrow2} src={arrow2} alt="" /> </button>
            </div>
            <div className={style.mainImg}>
                <img className={style.combo} src={combo} alt="" />
            </div>            
        </div>
    );
};

export default PagesMain;