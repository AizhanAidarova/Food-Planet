import React from 'react';
import style from "../../Pages/Menu/PagesMenu.module.css";
import phone from "../../Pages/Media/icon/phone-call.png";

const Delivery = (props) => {
    return (
        <div className={style.divBord}>
            <div>
                <img className={style.deliveriImg} src={props.imgUrl} alt=""/>
            </div>
            <div className={style.delivery2}>
                <h2 className={style.deliveryBlockH2}>{props.title}</h2>
                <p className={style.deliveryBlockP}>{props.titleDesc}</p>
                <p>{props.desc}</p>
                <p><img style={{width:"23px",marginRight:"10px"}} src={phone} alt=""/>{props.phone}</p>
            </div>
        </div>
    );
};

export default Delivery;