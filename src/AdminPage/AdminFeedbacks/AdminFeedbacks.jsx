import React from 'react';
import styles from "../AdminFeedbacks/AdminFeedbacks.module.css"
import { LOCALHOST_URL } from '../Constant';
import AdminContainer from '../AdminContainer/AdminContainer';

const AdminFeedbacks = () => {
    return (
        <div className={styles.mainFeedbacks}>
    <AdminContainer/>
    <div className={styles.feedback}>
      <button>Добавить</button>
      <table >
        <tr>
          <th>№</th>
          <th>Имя</th>
          <th>Фамилие</th>
          <th>Номер</th>
          <th>Почта</th>
          <th style={{ minWidth: "260px" , maxWidth:"260px" }}>Отзыв/жалоба</th>
          <th>Редактировать</th>
          <th>Удалить</th>
        </tr>
        {/* Данные стягивающиеся из json server */}
        <tr>
          <td></td>
        </tr>
      </table>

    </div>

  </div>
    );
};

export default AdminFeedbacks;