import React,{useEffect, useState} from 'react';
import styles from "../AdminFeedbacks/AdminFeedbacks.module.css"
import { LOCALHOST_URL } from '../Constant';
import AdminContainer from '../AdminContainer/AdminContainer';
import { getCurrentDate } from '../../helpers';
import toast from 'react-hot-toast';

const AdminFeedbacks = (props) => {
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

  const deleteUser = () => {
    const url = LOCALHOST_URL + "/feedbacks";

    const options = {
      method: "DELETE"
    }
    fetch(url,options)
        .then((response) => {
          if (response.status === 200){
            toast.success("Пользователь успешно удален")
          } else if (response.status ===404){
            toast.error ('Данный пользователь не найден')
          } else {
            toast.error ('Пожалуйста, повторите попытку')
          }
        })
  }

//   const getCommentsByPostId = () => {
//     const url = LOCALHOST_URL + "/feedbacks?postId=" +props.postId;

//     const status = {
//       status: "1"
//     }
//     const options = {
//       method: "PUT",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(status)
//     }
//     fetch(url,options)
//     .then((response) => console.log(response))
// }

// useEffect(() => {
//   getCommentsByPostId();
// },[])
  
    return (
        <div className={styles.mainFeedbacks}>
    <AdminContainer/>
    <div className={styles.feedback}>
      {/* <button className={styles.addButton}>Добавить</button> */}
      <h2>Отзывы и жалобы</h2>
      <table >
        <tr className={styles.background}>
          <th>№</th>
          <th>Имя</th>
          <th>Фамилие</th>
          <th>Номер</th>
          <th>Почта</th>
          <th style={{ minWidth: "200px" , maxWidth:"200px" }}>Отзыв/жалоба</th>
          <th>Редактировать</th>
          <th>Cохранить</th>
          <th>Удалить</th>
        </tr>
        {/* Данные стягивающиеся из json server */}
        {
        data.map((item) => {
                    return <> 
    <tr>
          <td><input style={{ minWidth: "30px" , maxWidth:"30px", minHeight:"30px", maxHeight:"30px" }} type="text" value={item.id}/></td>
          <td><input  style={{ minWidth: "80px" , maxWidth:"80px"}} type="text" value={item.name}/></td>
          <td><input style={{ minWidth: "100px" , maxWidth:"100px"}} type="text" value={item.surname}/></td>
          <td><input style={{ minWidth: "105px" , maxWidth:"105px"}} type="text" value={item.number}/></td>
          <td><input style={{ minWidth: "148px" , maxWidth:"148px"}}  type="text" value={item.email}/></td>
          <td> <textarea style={{ minWidth: "200px" , maxWidth:"200px", minHeight:"90px", maxHeight:"90px" }} name="" id="" cols="30" rows="10">{item.feedback}</textarea></td> 

          {/* textarea */}
          {/* <td> <textarea style={{ minWidth: "30px" , maxWidth:"30px", minHeight:"30px", maxHeight:"30px" }} name="" id="" cols="30" rows="10">{item.id}</textarea></td>
          <td> <textarea style={{ minWidth: "70px" , maxWidth:"70px", minHeight:"30px", maxHeight:"30px" }} name="" id="" cols="30" rows="10">{item.name}</textarea></td>
          <td> <textarea style={{ minWidth: "95px" , maxWidth:"95px", minHeight:"30px", maxHeight:"30px" }} name="" id="" cols="30" rows="10">{item.surname}</textarea></td>
          <td> <textarea style={{ minWidth: "95px" , maxWidth:"95px", minHeight:"30px", maxHeight:"30px" }} name="" id="" cols="30" rows="10">{item.number}</textarea></td>
          <td> <textarea style={{ minWidth: "95px" , maxWidth:"95px", minHeight:"30px", maxHeight:"30px" }} name="" id="" cols="30" rows="10">{item.email}</textarea></td>
          <td> <textarea style={{ minWidth: "95px" , maxWidth:"280px", minHeight:"80px", maxHeight:"80px" }} name="" id="" cols="30" rows="10">{item.feedback}</textarea></td> */}
          {/* buttons */}
          <td><button className={styles.editButton} >Редактировать</button></td>
          <td><button className={styles.saveButton}>Cохранить</button></td>
      <td><button className={styles.deleteButton} onClick={deleteUser}>Удалить</button></td>
        </tr>
</> })} 
      </table>

    </div>

  </div>
    );
};

export default AdminFeedbacks;