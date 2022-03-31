import React from 'react';
import {useState} from 'react';
import style from '../NoveltiesMenu/Novelties.module.css'
import BurgersMenu from './BurgersMenu';
import NoveltiesMenu from './NoveltiesMenu';

const Total = () => {
    return (
        <div className={style.novelties}>
            <div className={style.burgers}>
                <NoveltiesMenu/>
                <BurgersMenu/>
            </div>  
        </div>
    );
};

export default Total;




