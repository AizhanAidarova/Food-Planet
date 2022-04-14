import React from "react";
import styles from "../AdminContacts/AdminContacts.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";
import pen from "../../Pages/Media/Icons/pen (1).png";

const AdminContacts = () => {
  return (
    <div className={styles.containerContacts}>
      <AdminContainer />
      <div style={{ maxWidth: "1200px" }}>
        <h4>Контакты</h4>
        {/* Контакты для связи */}
        <div className={styles.mainContacts}>
          <div className={styles.contacts}>
            <img src={pen} alt="" />
            <h2>Номер</h2>
            <p>+996500405988</p>
          </div>
          <div className={styles.contacts}>
            <img src={pen} alt="" />
            <h2>Почта</h2>
            <p>food-planet@gmail.com</p>
          </div>
          <div className={styles.contacts}>
            <img src={pen} alt="" />
            <h2>Адрес</h2>
            <p>Суюмбаева 123, Бишкек, Кыргызстан</p>
          </div>
        </div>
        {/* Социальные сети */}
        <h4>Социальные сети</h4>
        <div className={styles.mainContacts}>
          <div className={styles.contacts}>
          <img src={pen} alt="" />
            <h2>Instagram</h2>
            <p>food-planet</p>
          </div>
          <div className={styles.contacts}>
          <img src={pen} alt="" />
            <h2>Telegram</h2>
            <p>food-planet</p>
          </div>
          <div className={styles.contacts}>
            <h2>Facebook</h2>
            <p>food-planet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;
