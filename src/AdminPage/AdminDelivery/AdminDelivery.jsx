import React, {useEffect, useState} from 'react';
import {LOCALHOST_URL} from "../Constant";
import AdminContainer from "../AdminContainer/AdminContainer";
import styles from "../AdminDelivery/AdminDelivery.module.css"
const AdminDelivery = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        const url = LOCALHOST_URL + "/delivery";

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
                <div className={styles.mainAdministrators}>
                    <h2 className={styles.administratorh1}>Доставка</h2>
                    <button className={styles.addButton}>Добавить</button>
                </div>
                <table>
                    <tr className={styles.background}>
                        <th>№</th>
                        <th>Картинка</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Номер</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                    {
                        data.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td><input style={{ minWidth: "30px" , maxWidth:"30px", minHeight:"30px", maxHeight:"30px" }} type="text" value={item.id}/></td>
                                        <td><img style={{ minWidth: "140px" , maxWidth:"140px" }} src={item.imgUrl} alt=""/></td>
                                        <td><input  style={{ minWidth: "130px" , maxWidth:"130px",textAlign:"center"}} type="text" value={item.title}/></td>
                                        <td> <textarea style={{ minWidth: "160px" , maxWidth:"160px", minHeight:"90px", maxHeight:"110px" }} >{item.titleDesc}</textarea></td>
                                        <td><input style={{ minWidth: "148px" , maxWidth:"148px", textAlign:"center"}}  type="text" value={item.phone}/></td>

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

export default AdminDelivery;