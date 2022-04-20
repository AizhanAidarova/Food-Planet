import React, { useState, useEffect } from "react";
import { LOCALHOST_URL } from "../Constant";
import styles from "../Administrators/Administrators.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";

const Administrators = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/administrators";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.mainAdministrators}>
      <AdminContainer />
      <div className={styles.administrators}>
        <button className={styles.addButton}>Добавить</button>
        <table>
          <tr className={styles.background}>
            <th>№</th>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Номер</th>
            <th>Почта</th>
            <th>Логин</th>
            <th>Пароль</th>
            <th>Редактировать</th>
            <th>Удалить</th>
          </tr>
          {/* Данные стягивающиеся из json server  */}
          {data.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td style={{ minWidth: "140px" , maxWidth:"140px" }}>{item.name}</td>
                  <td style={{ minWidth: "115px" , maxWidth:"150px" }}>{item.position}</td>
                  <td style={{ minWidth: "75px" , maxWidth:"135px" }}>{item.number}</td>
                  <td style={{ minWidth: "190px" , maxWidth:"220px" }}>{item.email}</td>
                  <td style={{ minWidth: "50px" , maxWidth:"80px" }}>{item.login}</td>
                  <td style={{ minWidth: "50px" , maxWidth:"100px" }}>{item.password}</td>
                  <td>
                    <button className={styles.editButton}>Редактировать</button>
                  </td>
                  <td>
                    <button className={styles.deleteButton}>Удалить</button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Administrators;
