import React from 'react';
import {delivery} from "../../AdminPage/Constant";
import style from "../../Pages/Menu/PagesMenu.module.css";
import Delivery from "../Delivery/Delivery";
import PagesHeader from "../Header/PagesHeader";
import PagesFooter from "../Footer/PagesFooter";

const DeliveryMain = () => {
    return (
        <>
            <PagesHeader/>
            <div className={style.mainMenu}>
                <div className={style.deliveryService}>
                    <h1 className={style.deliveryh1}>Службы доставки</h1>
                    <p className={style.deliveryP}>Можете заказать доставку нашей продукции любым для Вас способом</p>
                </div>
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
            <PagesFooter/>
        </>
    );
};

export default DeliveryMain;