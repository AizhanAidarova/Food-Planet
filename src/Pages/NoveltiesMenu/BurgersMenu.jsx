import React from 'react';
import { burgers } from '../Constant/Index';
import Burgers from './Burgers';
import style from '../NoveltiesMenu/Novelties.module.css'




const BurgersMenu = () => {
    return (
        <>
        <div className={style.novelties}>
            {
                burgers.map ((item, index)=>{
                    return <Burgers
                    id={item.id}
                    imageUrl={item.imageUrl}
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

export default BurgersMenu;

