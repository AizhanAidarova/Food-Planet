import React from 'react';
import {block} from "../../AdminPage/Constant/index";
import PizzaProps from "./PizzaProps";

const PizzaMap = () => {
    return (
        <>
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
        </>
    );
};

export default PizzaMap;