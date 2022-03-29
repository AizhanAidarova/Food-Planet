import React from 'react';
import {block} from "../../AdminPage/Constant/index";
import PizzaProps from "./PizzaProps";
import style from "../Menu/PagesMenu.module.css"

const PizzaMap = () => {
    return (
        <>
            <div className={style.pizzaMap}>
            {
                block.map((item) => {
                    return <PizzaProps
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