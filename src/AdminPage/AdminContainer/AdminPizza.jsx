import React, {useEffect, useState} from 'react';
import styles from "../Administrators/Administrators.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";
import {LOCALHOST_URL} from "../Constant";
import toast from "react-hot-toast";

const AdminPizza = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const url = LOCALHOST_URL + "/pizza";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    useEffect(() => {
        getData();
    }, []);

    // const deleteUser = () => {
    //     const url = LOCALHOST_URL + "/feedbacks";
    //
    //     const options = {
    //         method: "DELETE"
    //     }
    //     fetch(url,options)
    //         .then((response) => {
    //             if (response.status === 200){
    //                 toast.success("Пользователь успешно удален")
    //             } else if (response.status ===404){
    //                 toast.error ('Данный пользователь не найден')
    //             } else {
    //                 toast.error ('Пожалуйста, повторите попытку')
    //             }
    //         })
    // }

    return (
        <div className={styles.mainAdministrators}>
            <AdminContainer />
            <div className={styles.administrators}>
                <button className={styles.addButton}>Добавить</button>
                <table>
                    <tr className={styles.background}>
                        <th>№</th>
                        <th>Картинка</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                    {/* Данные стягивающиеся из json server  */}
                    {
                        data.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td><input style={{ minWidth: "30px" , maxWidth:"30px", minHeight:"30px", maxHeight:"30px" }} type="text" value={item.id}/></td>
                                    <td><img style={{ minWidth: "140px" , maxWidth:"140px" }} src={item.img} alt=""/></td>
                                    <td><input  style={{ minWidth: "80px" , maxWidth:"80px"}} type="text" value={item.name}/></td>
                                    <td> <textarea style={{ minWidth: "200px" , maxWidth:"200px", minHeight:"90px", maxHeight:"110px" }} >{item.desc}</textarea></td>
                                    <td><input style={{ minWidth: "148px" , maxWidth:"148px", textAlign:"center"}}  type="text" value={item.price}/></td>

                                    <td>
                                        <button className={styles.editButton}>Редактировать</button>
                                    </td>
                                    <td>
                                        <button className={styles.deleteButton}>Удалить</button>
                                        {/*<button className={styles.deleteButton} onClick={deleteUser}>Удалить</button>*/}
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

export default AdminPizza;