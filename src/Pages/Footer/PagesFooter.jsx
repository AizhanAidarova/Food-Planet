import React, { useState } from "react";
import phone from "../Media/Icons/Vector.svg";
import logo from "../Media/Icons/LOgo.svg";
import styles from "./PagesFooter.module.css";

const PagesFooter = () => {
  return (
    <div style={{maxWidth: "1600px", backgroundColor: "#254F4C"}}>
    <footer>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>Главная</li>
          <li>Меню</li>
          <li>Доставка</li>
          <li>Контакты</li>
          <li>
            <div className={styles.phone}>
              <img src={phone} alt="" />
              <p>+996500405988</p>
            </div>
          </li>
        </ul>
      </nav>
    </footer>
    </div>
  );
};

export default PagesFooter;
