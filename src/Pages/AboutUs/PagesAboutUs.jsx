import React from 'react';
import styles from "./PagesAboutUs.module.css"
import aboutUs from "../Media/Icons/AboutUs1.svg"

const PagesAboutUs = () => {
    return (
        <>
        <div style={{maxWidth: "1600px"}} className={styles.aboutUsWidth}>
            <div style={{maxWidth: "1120px"}}>
                <h3>Почему выбирают нас:</h3>
            <div className={styles.fourAboutUs}>
                <div className={styles.aboutUs}>
                    <img src={aboutUs} alt="" />
                    <h2>Мгновенная доставка</h2>
                    <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
                <div className={styles.aboutUs}>
                    <img src={aboutUs} alt="" />
                    <h2>Мгновенная доставка</h2>
                    <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
                <div className={styles.aboutUs}>
                    <img src={aboutUs} alt="" />
                    <h2>Мгновенная доставка</h2>
                    <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
                <div className={styles.aboutUs}>
                    <img src={aboutUs} alt="" />
                    <h2>Мгновенная доставка</h2>
                    <p>Доставим заказанную вами еду за 30 минут + напиток в подарок</p>
                </div>
            </div>
            
               
        </div>
        </div>
        </>
    );
};

export default PagesAboutUs;