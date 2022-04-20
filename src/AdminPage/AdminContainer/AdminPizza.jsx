import React, {useEffect, useState} from 'react';
import styles from "../Administrators/Administrators.module.css";
import AdminContainer from "../AdminContainer/AdminContainer";
import {LOCALHOST_URL} from "../Constant";

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
                                    <td>{item.id}</td>
                                    <td><img style={{ minWidth: "140px" , maxWidth:"140px" }} src={item.img} alt=""/></td>
                                    <td style={{ minWidth: "50px" , maxWidth:"100px" }}> {item.name}</td>
                                    <td style={{ minWidth: "335px" , maxWidth:"135px" }}>{item.desc}</td>
                                    <td style={{ minWidth: "50px" , maxWidth:"50px" }}>{item.price}</td>
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

export default AdminPizza;