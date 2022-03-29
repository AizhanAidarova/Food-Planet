import React from 'react';
import {delivery} from "../../AdminPage/Constant";
import style from "../../Pages/Menu/PagesMenu.module.css";
import Delivery from "../Delivery/Delivery";

const DeliveryMain = () => {
    return (
        <div className={style.mainMenu}>
            <h1 className={style.deliveryh1}>Службы доставки</h1>
            <p className={style.deliveryP}>Можете заказать доставку нашей продукции любым для Вас способом</p>
            <div className={style.display}>
                {
                    delivery.map((item) => {
                        return <Delivery
                            key={item.id}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            titleDesc={item.titleDesc}
                            phone={item.phone}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default DeliveryMain;