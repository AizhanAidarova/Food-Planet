import React, { useState, useEffect } from "react";
import styles from "../AdminContacts/AdminContacts.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";
import { LOCALHOST_URL } from "../Constant";

const AdminContacts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/contacts";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={styles.containerContacts}>
      <AdminContainer />
      <div>
      <button className={styles.editButton}>Редактировать</button>
      <button className={styles.deleteButton}>Удалить</button>
      {
        data.map((item) => {
                    return <>
        <h4>Контакты</h4>
        {/* Контакты для связи */}
        <div className={styles.mainContacts}>
          <div className={styles.contacts}>
            <h2>Номер</h2>
            <p>{item.number}</p>
          </div>
          <div className={styles.contacts}>
            <h2>Почта</h2>
            <p>{item.email}</p>
          </div>
          <div className={styles.contacts}>
            <h2>Адрес</h2>
            <p>{item.adress}</p>
          </div>
        </div>
        {/* Социальные сети */}
        <h4>Социальные сети</h4>
        <div className={styles.mainContacts}>
          <div className={styles.contacts}>
            <h2>Instagram</h2>
            <p>{item.instagram}</p>
          </div>
          <div className={styles.contacts}>
            <h2>Telegram</h2>
            <p>{item.telegram}</p>
          </div>
          <div className={styles.contacts}>
            <h2>Facebook</h2>
            <p>{item.facebook}</p>
          </div>
        </div> </> })} 
      </div>
    </div>
  );
};

export default AdminContacts;
