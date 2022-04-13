import React, {useState, useEffect} from "react";
import AdminContainer from "../AdminContainer/AdminContainer";
import styles from "../AdminAboutUs/AdminAboutUs.module.css";
import { LOCALHOST_URL } from "../Constant";

const AdminAboutUs = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const url = LOCALHOST_URL + "/aboutUs";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  
  useEffect(()=>{
    getData()
  },[])

  return <div className={styles.mainAbouUs}>
    <AdminContainer/>
    <div className={styles.abouUs}>
      <button className={styles.addButton}>Добавить</button>
      <table >
        <tr className={styles.background}>
          <th>№</th>
          <th style={{ minWidth: "160px" , maxWidth:"160px" }}>Преимущества</th>
          <th style={{ minWidth: "346px" , maxWidth:"346px" }}>Описание</th>
          <th>Фото</th>
          <th>Редактировать</th>
          <th>Удалить</th>
        </tr>
        {/* Данные стягивающиеся из json server  */}
       {
        data.map((item) => {
                    return <> <tr>
                   <td>{item.id}</td>
      <td style={{ minWidth: "160px" , maxWidth:"160px" }}>{item.reasons}</td>
      <td style={{ minWidth: "346px" , maxWidth:"346px" }}>{item.reasonsInDetail}</td>
      <td><img src={item.img} alt="" /></td>
      <td><button className={styles.editButton}>Редактировать</button></td>
      <td><button className={styles.deleteButton}>Удалить</button></td>
    </tr></> })} 
     
      </table>  

    </div>

  </div>;
};

export default AdminAboutUs;
