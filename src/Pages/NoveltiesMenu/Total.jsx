import React from 'react';
import style from '../NoveltiesMenu/Novelties.module.css'
import NoveltiesMenu from './NoveltiesMenu';

const Total = () => {
    return (
        <div className={style.novelties}>
                <NoveltiesMenu/>
                {/* <BurgersMenu/> */}
        </div>
    );
};

export default Total;




