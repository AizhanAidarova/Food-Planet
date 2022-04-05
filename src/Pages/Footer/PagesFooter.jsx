import React, { useState } from "react";
import phone from "../Media/Icons/Vector.svg";
import logo from "../Media/Icons/LOgo.svg";
import styles from "./PagesFooter.module.css";
import { Link } from "react-router-dom";

const PagesFooter = () => {
  return (
    <>
    <footer className={styles.footer} style={{backgroundColor: "#254F4C"}}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
        <Link to={`/index`}><li className={styles.main}>Главная</li></Link>
          <li>Меню</li>
          <Link to={`/delivery`}> <li className={styles.delivery}>Доставка</li></Link>
          <Link to={`/contacts`}> <li className={styles.contacts}>Контакты</li></Link>
          <li>
            <div className={styles.phone}>
              <img src={phone} alt="" />
              <p>+996500405988</p>
            </div>
          </li>
        </ul>
      </nav>
    </footer>
    </>
  );
};

export default PagesFooter;
