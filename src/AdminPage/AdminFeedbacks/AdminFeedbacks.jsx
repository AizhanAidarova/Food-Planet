import React,{useEffect, useState} from 'react';
import styles from "../AdminFeedbacks/AdminFeedbacks.module.css"
import { LOCALHOST_URL } from '../Constant';
import AdminContainer from '../AdminContainer/AdminContainer';
import { getCurrentDate } from '../../helpers';

const AdminFeedbacks = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/feedbacks";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  
  useEffect(()=>{
    getData()
  },[])

  
    return (
        <div className={styles.mainFeedbacks}>
    <AdminContainer/>
    <div className={styles.feedback}>
      <button className={styles.addButton}>Добавить</button>
      <table >
        <tr className={styles.background}>
          <th>№</th>
          <th>Имя</th>
          <th>Фамилие</th>
          <th>Номер</th>
          <th>Почта</th>
          <th style={{ minWidth: "280px" , maxWidth:"280px" }}>Отзыв/жалоба</th>
          <th>Редактировать</th>
          <th>Удалить</th>
        </tr>
        {/* Данные стягивающиеся из json server */}
        {
        data.map((item) => {
                    return <> 
    <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>{item.number}</td>
          <td>{item.email}</td>
          <td style={{ minWidth: "280px" , maxWidth:"280px" }}>{item.feedback}</td>
          <td><button className={styles.editButton}>Редактировать</button></td>
      <td><button className={styles.deleteButton}>Удалить</button></td>
        </tr>
</> })} 
      </table>

    </div>

  </div>
    );
};

export default AdminFeedbacks;