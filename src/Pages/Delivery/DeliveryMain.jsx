import React, {useEffect, useState} from 'react';
import {delivery, LOCALHOST_URL} from "../../AdminPage/Constant";
import style from "../../Pages/Menu/PagesMenu.module.css";
import Delivery from "../Delivery/Delivery";
import PagesHeader from "../Header/PagesHeader";
import PagesFooter from "../Footer/PagesFooter";

const DeliveryMain = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        const url = LOCALHOST_URL + "/delivery";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    useEffect(()=>{
        getData()
    },[])

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
                        data.map((item) => {
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