import React from 'react';
import {block} from "../../AdminPage/Constant/index";
import style from "../Menu/PagesMenu.module.css"
import MenuHeader from "./MenuHeader";

const PizzaMap = () => {
    return (
        <>
            <div className={style.pizzaMap}>
            {
                block.map((item) => {
                    return <MenuHeader
                        id={item.id}
                        imgUrl={item.imgURL}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        desc={item.desc}
                    />
                })
            }
            </div>
        </>
    );
};

export default PizzaMap;