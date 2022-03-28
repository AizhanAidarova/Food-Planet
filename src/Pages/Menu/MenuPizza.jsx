import React from 'react';
import {block} from "../../AdminPage/Constant/index";
import Pizza from "./Pizza";

const MenuPizza = () => {
    return (
        <>
            {
                block.map((item,index) => {
                    return <Pizza
                        id={item.id}
                        imgUrl={item.imgURL}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        desc={item.desc}
                    />
                })
            }
        </>
    );
};

export default MenuPizza;