import React from "react";
import AdminContainer from "../AdminContainer/AdminContainer";
import styles from "../AdminAboutUs/AdminAboutUs.module.css";
import { LOCALHOST_URL } from "../Constant";

const AdminAboutUs = () => {

  return <div className={styles.mainAbouUs}>
    <AdminContainer/>
    <div className={styles.abouUs}>
      <button>Добавить</button>
      <table >
        <tr>
          <th>№</th>
          <th style={{ minWidth: "270px" , maxWidth:"300px" }}>Преимущества</th>
          <th style={{ minWidth: "270px" , maxWidth:"320px" }}>Описание</th>
          <th>Фото</th>
          <th>Редактировать</th>
          <th>Удалить</th>
        </tr>
        {/* Данные стягивающиеся из json server */}
        <tr>
          <td></td>
        </tr>
      </table>

    </div>

  </div>;
};

export default AdminAboutUs;
