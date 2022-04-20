import React from 'react';
import style from "../../Pages/Menu/PagesMenu.module.css";
import phone2 from "../../Pages/Media/Icons/phone.svg"

const Delivery = (props) => {
    return (
        <div className={style.divBord}>
            <div>
                <img className={style.deliveriImg} src={props.imgUrl} alt=""/>
            </div>
            <div className={style.delivery2}>
                <h2>{props.title}</h2>
                <p>{props.titleDesc}</p>
                <p>{props.desc}</p>
                <p><img style={{width:"23px",marginRight:"10px"}} src={phone2} alt=""/>{props.phone}</p>
            </div>
        </div>
    );
};

export default Delivery;